import React from 'react'
import { PrimaryButton } from 'components/Button'
import useWeb3React from 'hooks/useWeb3'
import { useWalletModalToggle } from 'state/application/hooks'

export default function Migrator() {
  const { chainId, account } = useWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  return (
    <div>
      <div>Migrator</div>
      {!chainId || !account ? <PrimaryButton onClick={toggleWalletModal}>Connect Wallet</PrimaryButton> : <div></div>}
    </div>
  )
}
