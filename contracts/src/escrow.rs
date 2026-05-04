#![no_std]

use soroban_sdk::{
    contract, contractimpl, contracttype, token, Address, Env, Symbol,
};

/// Status of an escrow contract
#[contracttype]
#[derive(Clone, PartialEq)]
pub enum EscrowStatus {
    Active,
    Completed,
    Disputed,
    Refunded,
}

/// Data stored for each escrow
#[contracttype]
pub struct EscrowData {
    pub client: Address,
    pub freelancer: Address,
    pub token: Address,
    pub amount: i128,
    pub status: EscrowStatus,
}

/// Storage keys
#[contracttype]
pub enum DataKey {
    Escrow,
}

#[contract]
pub struct EscrowContract;

#[contractimpl]
impl EscrowContract {
    /// Initialize a new escrow — client locks USDC for a freelancer
    pub fn initialize(
        env: Env,
        client: Address,
        freelancer: Address,
        token: Address,
        amount: i128,
    ) {
        // Client must authorize this transaction
        client.require_auth();

        // Transfer USDC from client into this contract
        let token_client = token::Client::new(&env, &token);
        token_client.transfer(&client, &env.current_contract_address(), &amount);

        // Store escrow data
        let escrow = EscrowData {
            client: client.clone(),
            freelancer: freelancer.clone(),
            token,
            amount,
            status: EscrowStatus::Active,
        };

        env.storage().instance().set(&DataKey::Escrow, &escrow);

        // Emit event
        env.events().publish(
            (Symbol::new(&env, "escrow_created"),),
            (client, freelancer, amount),
        );
    }

    /// Client approves work — releases USDC to freelancer
    pub fn release_payment(env: Env) {
        let mut escrow: EscrowData = env
            .storage()
            .instance()
            .get(&DataKey::Escrow)
            .expect("Escrow not initialized");

        // Only client can release payment
        escrow.client.require_auth();

        assert!(
            escrow.status == EscrowStatus::Active,
            "Escrow is not active"
        );

        // Transfer USDC to freelancer
        let token_client = token::Client::new(&env, &escrow.token);
        token_client.transfer(
            &env.current_contract_address(),
            &escrow.freelancer,
            &escrow.amount,
        );

        escrow.status = EscrowStatus::Completed;
        env.storage().instance().set(&DataKey::Escrow, &escrow);

        env.events().publish(
            (Symbol::new(&env, "payment_released"),),
            (escrow.freelancer, escrow.amount),
        );
    }

    /// Client requests a refund (before work is submitted)
    pub fn refund(env: Env) {
        let mut escrow: EscrowData = env
            .storage()
            .instance()
            .get(&DataKey::Escrow)
            .expect("Escrow not initialized");

        escrow.client.require_auth();

        assert!(
            escrow.status == EscrowStatus::Active,
            "Escrow is not active"
        );

        // Return USDC to client
        let token_client = token::Client::new(&env, &escrow.token);
        token_client.transfer(
            &env.current_contract_address(),
            &escrow.client,
            &escrow.amount,
        );

        escrow.status = EscrowStatus::Refunded;
        env.storage().instance().set(&DataKey::Escrow, &escrow);

        env.events().publish(
            (Symbol::new(&env, "escrow_refunded"),),
            (escrow.client, escrow.amount),
        );
    }

    /// Get current escrow status
    pub fn get_escrow(env: Env) -> EscrowData {
        env.storage()
            .instance()
            .get(&DataKey::Escrow)
            .expect("Escrow not initialized")
    }
}