import React from 'react'
import { ModalProvider } from '@prodvdjin/dmgk-uikit'
import { Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import { LanguageContextProvider } from 'contexts/Localisation/languageContext'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { BlockContextProvider } from 'contexts/BlockContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import store from 'state'
import { getLibrary } from 'utils/web3React'

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <ToastsProvider>
        <ThemeContextProvider>
          <LanguageContextProvider>
            {/* <bsc.UseWalletProvider
              chainId={chainId}
              connectors={{
                walletconnect: { rpcUrl },
                bsc,
              }}
            > */}
              <BlockContextProvider>
                <RefreshContextProvider>
                  <ModalProvider>{children}</ModalProvider>
                </RefreshContextProvider>
              </BlockContextProvider>
            {/* </bsc.UseWalletProvider> */}
          </LanguageContextProvider>
        </ThemeContextProvider>
      </ToastsProvider>
    </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
