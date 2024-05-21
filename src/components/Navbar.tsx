"use client"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
    return (
        <nav className='p-4 flex justify-between items-center bg-zinc-800'>
            <WalletMultiButton className='!bg-helius-orange hover:!bg-black transition-all duration-200 !rounded-lg' />
        </nav>
    );
};

export default Navbar;