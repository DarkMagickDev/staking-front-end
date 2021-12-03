// import { ConfigMenuItemsType } from './config'
import { MenuItemsType } from '@prodvdjin/dmgk-uikit'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

export const getActiveMenuItem = ({ pathname, menuConfig }: { pathname: string; menuConfig: ConfigMenuItemsType[] }) =>
  menuConfig.find((menuItem) => (pathname === menuItem.href) || getActiveSubMenuItem({ menuItem, pathname }))

export const getActiveSubMenuItem = ({ pathname, menuItem }: { pathname: string; menuItem?: ConfigMenuItemsType }) => {
  const activeSubMenuItems = menuItem?.items?.filter((subMenuItem) => pathname.startsWith(subMenuItem.href)) ?? []

  // Pathname doesn't include any submenu item href - return undefined
  if (!activeSubMenuItems || activeSubMenuItems.length === 0) {
    return undefined
  }

  // Pathname includes one sub menu item href - return it
  if (activeSubMenuItems.length === 1) {
    return activeSubMenuItems[0]
  }

  // Pathname includes multiple sub menu item hrefs - find the most specific match
  const mostSpecificMatch = activeSubMenuItems.sort(
    (subMenuItem1, subMenuItem2) => subMenuItem2.href.length - subMenuItem1.href.length,
  )[0]

  return mostSpecificMatch
}

export const getPriceDmgkVsUsd = async (): Promise<any> => {
  const url = 'https://api.coingecko.com/api/v3/simple/price?ids=darkmagick&vs_currencies=usd'
  try {
    const result = await fetch(url, {headers: {
      'Content-Type': 'application/json'
    }});
    return result.json()
  } catch (error) {
    console.log('usePriceDmgkVsUsd ==>', error);
  }

  return undefined;
}