// import { MenuEntry } from '@prodvdjin/dmgk-uikit'
import { MenuItemsType } from '@prodvdjin/dmgk-uikit'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: any[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy on Croxswap',
        href: 'https://exchange.croxswap.com/#/swap?outputCurrency=0x6f89660fef8b6a03a41e5f3d0306645be2469efe',
        type: 1,
      },
      {
        label: 'Buy on Pancakeswap',
        href: 'https://pancakeswap.finance/swap?outputCurrency=0x6f89660fef8b6a03a41e5f3d0306645be2469efe',
        type: 1,
      },
      {
        label: 'Liquidity on Croxswap',
        href: 'https://exchange.croxswap.com/#/pool',
        type: 1,
      },
      {
        label: 'Liquidity on Pancakeswap',
        href: 'https://pancakeswap.finance/liquidity',
        type: 1,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: '/nests',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Website',
        href: 'https://darkmagick.co/',
        type: 1,
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.finance/info/token/0x6F89660fEf8B6a03a41E5F3d0306645BE2469eFE',
        type: 1,
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/darkmagick',
        type: 1,
      },
      {
        label: 'DexTools',
        href: 'https://www.dextools.io/app/bsc/pair-explorer/0x0cd050602341dcc312005287c8fb480ec0da6abe',
        type: 1,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://dp.darkmagick.co/',
        type: 1,
      },
      {
        label: 'Github',
        href: 'https://github.com/',
        type: 1,
      },
      {
        label: 'Telegram',
        href: 'https://t.me/darkmagickofficial',
        type: 1,
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
