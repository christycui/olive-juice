'use client';
import { useAccount } from 'wagmi';

import MintNft from './MintNft';
import RegisterPILPolicy from './RegisterPILPolicy';
import MintLicense from './MintLicense';
import RegisterIpAsset from './RegisterIpAsset';
import RegisterDerivativeIp from './RegisterDerivativeIpAsset';
import { useEffect, useState } from 'react';
import { LinkComponent } from '@/components/LinkComponent'
import AddPolicyToIp from './AddPolicyToIpAsset';


export default function Home() {
  const { isConnected } = useAccount();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:px-20 lg:py-12 gap-8 max-w-2xl lg:max-w-5xl mx-auto  bg-black text-white text-sm">
      <div className="flex flex-col text-center text-white text-lg">
        {!isConnected ? (
          <>
            <p>
              This is a simple example of how to use the Story Protocol React
              SDK to interact with the protocol.
            </p>
            <p>Connect your wallet to get started.</p>
          </>
        ) : (
          <>
            {' '}
            Register your video and discover its social provenance
          </>
        )}
      </div>
      {isConnected && (
        <div className="w-full flex flex-col gap-4">
          <label for="fname">Your Youtube Video Link:</label>
          <input type='text' name='Youtube Link'></input>
          <MintNft />
          <RegisterIpAsset />

          <LinkComponent
            className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            href='/examples/show-graph'>
            See your video's social graph.
          </LinkComponent>
        </div>
      )}
    </main>
  );
}