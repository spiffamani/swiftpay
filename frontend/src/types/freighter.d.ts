interface Window {
  freighter?: {
    isConnected: () => Promise<{ isConnected: boolean }>;
    requestAccess: () => Promise<{ address: string }>;
    getAddress: () => Promise<{ address: string }>;
    getNetwork: () => Promise<{ network: string; networkPassphrase: string }>;
    signTransaction: (xdr: string, opts?: object) => Promise<{ signedTxXdr: string }>;
  };
}