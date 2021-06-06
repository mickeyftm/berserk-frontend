import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
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
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x1062FDC16d177Ff634e39EB1871b5EFD6c81a3CF',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Dividends (Coming soon)',
    icon: 'LayerIcon',
    href: '/',
   },
  // {
  //   label: 'Devidents',
  //   icon: 'VaultsIcon',
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
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0x1062FDC16d177Ff634e39EB1871b5EFD6c81a3CF',
      },
      {
        label: 'QuickChart',
        href: 'https://quickchart.app/token/0x1062FDC16d177Ff634e39EB1871b5EFD6c81a3CF',
      },
//      {
//        label: 'DappRadar',
//        href: 'https://dappradar.com/polygon/defi/polygoat-finance',
//      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mickeyftm',
      },
      {
        label: 'Docs',
        href: 'https://berserkfinance.gitbook.io/berserk/',
      },
    ],
  },
  // {
  //  label: 'Audit by Solidity Finance',
  //  icon: 'AuditIcon',
  //  href: 'https://solidity.finance/audits/PolyGoat/',
  // },
]
export default config