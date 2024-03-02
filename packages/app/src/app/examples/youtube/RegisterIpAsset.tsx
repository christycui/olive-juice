'use client';
import { useRegisterRootIp } from '@story-protocol/react';
import { stringToHex } from 'viem';
import Button from './Button';
import TextAndButton from '@/utils/TextAndButton';

export default function RegisterIpAsset() {
  const {
    writeContractAsync,
    isPending: isPendingInWallet,
    data: txHash,
  } = useRegisterRootIp();

  // Update these
  const tokenId = 0; // Your NFT token ID as BigInt
  // const tokenId = BigInt(23); // Example
  const nftContract = '0x74B2f5F62023Cb99b1f33f5D68a51ed5D54437c7'; // Update if using your own NFT

  const policyId = BigInt(0); // Policy ID from RegisterPILPolicy.tsx, if want to attach policy in same transaction
  const ipName = 'The GWB Story'; // Name of your IP, if applicable
  const contentHash = stringToHex('0x', { size: 32 }); // Content hash of your NFT, if applicable
  const externalURL = 'https://youtu.be/ioxdYyjdTDI?si=FxtUfiqNY8zdID2R'; // External URL for your IP, if applicable

  async function handleClick() {
    if (tokenId === undefined) {
      alert('Please update tokenId in RegisterRootIp.tsx');
    }

    await writeContractAsync({
      functionName: 'registerRootIp',
      args: [policyId, nftContract, tokenId, ipName, contentHash, externalURL],
    });
  }

  if (isPendingInWallet) return <Button disabled>Confirm in wallet...</Button>; // This

  const text =
    tokenId === undefined
      ? '2. Update the tokenId value in RegisterIpAsset.tsx'
      : '2. Register your NFT as an IP Asset.';

  return (
    <TextAndButton
      description={text}
      Button={() => (
        <Button onClick={() => handleClick()} disabled={isPendingInWallet}>
          Register IP Asset
        </Button>
      )}
      txHash={txHash}
    />
  );
}