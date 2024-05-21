"use client"
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets'
import * as web3 from '@solana/web3.js';
import React, { useEffect, useState } from 'react';
require('@solana/wallet-adapter-react-ui/styles.css');
import { ReactNode } from 'react';

interface WalletContextProviderProps {
    children: ReactNode;
}

const WalletContextProvider: React.FC<WalletContextProviderProps> = ({ children }) => {

    const endpoint = web3.clusterApiUrl('devnet');
    const wallets = [
        new walletAdapterWallets.PhantomWalletAdapter()
    ];
    const [initialRender , setInitialRender] = useState<boolean>(false);
    useEffect(() => {
        setInitialRender(true);
    } , [])
    return (
       <>
        {
            initialRender ? (
                <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets}>
                    <WalletModalProvider>
                        {children}
                    </WalletModalProvider>
                </WalletProvider>
            </ConnectionProvider>
            ) : (
                <></>
            )
        }
       </>
    );
};

export default WalletContextProvider;