import React from 'react'
import { Button, useWalletModal } from '@prodvdjin/dmgk-uikit'
import useAuth from 'hooks/useAuth'

const ConnectWalletButton = (props) => {
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, (key: string) => key)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      Connect Wallet
    </Button>
  )
}

export default ConnectWalletButton
