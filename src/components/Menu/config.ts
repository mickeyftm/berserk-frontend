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
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xEd050320Cedd262a92D98EF02Bf155ACE366D49B',
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
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0xEd050320Cedd262a92D98EF02Bf155ACE366D49B',
      },
//      {
//        label: 'Vfat Tools',
//        href: 'https://vfat.tools/polygon/polygoat',
//      },
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