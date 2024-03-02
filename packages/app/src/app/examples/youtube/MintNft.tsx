'use client';

import React from 'react';
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import Button from './Button';
import { waitForTransactionReceipt } from '@/utils/transaction';
import TextAndButton from '@/utils/TextAndButton';

export default function MintNft({
  text,
  buttonText,
}: {
  text?: string;
  buttonText?: string;
}) {
  const {
    writeContractAsync,
    isPending: isPendingInWallet,
    data,
  } = useWriteContract();

  const { address } = useAccount();

  async function handleMintNft() {
    await writeContractAsync({
      address: '0x74B2f5F62023Cb99b1f33f5D68a51ed5D54437c7', // Youtube ERC721 contract address to mint from
      functionName: 'safeMint',
      args: [address, 'https://twitter.com/little_cxx/status/1763864346172522586'],
      abi: [
        {
          inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'string', name: 'uri', type: 'string' }],
          name: 'safeMint',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
    });
  }

  return (
    <TextAndButton
      description={text ? text : "1. Mint an NFT if you don't have one already"}
      Button={() => (
        <Button onClick={() => handleMintNft()}>
          {isPendingInWallet
            ? 'Confirm in wallet'
            : buttonText
            ? buttonText
            : 'Mint an NFT'}
        </Button>
      )}
      txHash={data}
    />
  );
}