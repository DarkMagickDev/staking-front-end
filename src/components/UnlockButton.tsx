import React from 'react'
import { Button, useWalletModal } from '@prodvdjin/dmgk-uikit'

import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(login, logout, (key: string) => key)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
