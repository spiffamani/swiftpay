import { useState, useEffect, useCallback } from "react";

type FreighterState = {
  isInstalled: boolean;
  isConnected: boolean;
  publicKey: string | null;
  network: string | null;
  networkPassphrase: string | null;
  isLoading: boolean;
  error: Error | null;
};

const INITIAL_STATE: FreighterState = {
  isInstalled: false,
  isConnected: false,
  publicKey: null,
  network: null,
  networkPassphrase: null,
  isLoading: true,
  error: null,
};

export function useFreighter() {
  const [state, setState] = useState<FreighterState>(INITIAL_STATE);

  const probe = useCallback(async () => {
    setState((s) => ({ ...s, isLoading: true, error: null }));
    try {
      if (!window.freighter) {
        setState((s) => ({ ...s, isInstalled: false, isLoading: false }));
        return;
      }
      const { isConnected } = await window.freighter.isConnected();
      if (!isConnected) {
        setState((s) => ({ ...s, isInstalled: true, isLoading: false }));
        return;
      }
      const { address } = await window.freighter.getAddress();
      const { network, networkPassphrase } = await window.freighter.getNetwork();
      setState({
        isInstalled: true,
        isConnected: true,
        publicKey: address,
        network,
        networkPassphrase,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      setState((s) => ({
        ...s,
        isLoading: false,
        error: err instanceof Error ? err : new Error("Unknown error"),
      }));
    }
  }, []);

  useEffect(() => {
    probe();
  }, [probe]);

  const connect = useCallback(async () => {
    setState((s) => ({ ...s, isLoading: true, error: null }));
    try {
      if (!window.freighter) {
        throw new Error("Freighter is not installed. Visit freighter.app to install.");
      }
      await window.freighter.requestAccess();
      await probe();
    } catch (err) {
      setState((s) => ({
        ...s,
        isLoading: false,
        error: err instanceof Error ? err : new Error("Failed to connect"),
      }));
    }
  }, [probe]);

  const disconnect = useCallback(() => {
    setState((s) => ({
      ...s,
      isConnected: false,
      publicKey: null,
      network: null,
      networkPassphrase: null,
    }));
  }, []);

  const signTransaction = useCallback(async (xdr: string) => {
    if (!window.freighter) throw new Error("Freighter not installed");
    const result = await window.freighter.signTransaction(xdr);
    if ("error" in result && result.error) throw new Error(String(result.error));
    return (result as any).signedTxXdr as string;
  }, []);

  return {
    ...state,
    connect,
    disconnect,
    signTransaction,
  };
}