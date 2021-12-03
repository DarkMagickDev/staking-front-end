import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import { Menu as UikitMenu } from '@prodvdjin/dmgk-uikit'
import useAuth from 'hooks/useAuth'
import { getActiveMenuItem, getActiveSubMenuItem, getPriceDmgkVsUsd } from './utils'
import UserMenu from './UserMenu'
// import GlobalSettings from './GlobalSettings'
import config from './config'
// import { usePriceDmgkVsUsd } from 'state/hooks'

const Menu = (props) => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  // const cakePriceUsd = usePriceCakeBusd()

  const { pathname } = useLocation()
  
  const activeMenuItem = getActiveMenuItem({ menuConfig: config, pathname }) || config[0]

  const [dmgkPrice, setDmgkPrice] = useState(0);

  async function fetchPrice () {
    const result = await getPriceDmgkVsUsd();
    setDmgkPrice(result.darkmagick.usd);
  }

  useEffect(() => {
    fetchPrice();
  }, [])

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      // globalMenu={<GlobalSettings />}
      account={account}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={dmgkPrice}
      links={config}
      buyCakeLabel='Buy DMGK'
      priceLink="https://www.coingecko.com/en/coins/goose-finance"
      activeItem={activeMenuItem?.href}
      {...props}
    />
  )
}

export default Menu
