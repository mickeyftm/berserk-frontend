import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'BRSK-USDC LP',
    decimal: 18,
    lpAddresses: {
      137: '0x0d1d755090b7d25fda21f5808266070fae302de7',
    },
    tokenSymbol: 'GOAT',
    tokenAddresses: {
      137: '0x1062FDC16d177Ff634e39EB1871b5EFD6c81a3CF',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'BRSK-WMATIC LP',
    decimal: 18,
    lpAddresses: {
      137: '0x86c0a5932dcf094d32224c522c2e68cb3c6d4716',
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BRSK',
    decimal: 18,
    lpAddresses: {
      137: '0x0d1d755090b7d25fda21f5808266070fae302de7'
    },
    tokenSymbol: 'GOAT',
    tokenAddresses: {
      137: '0x1062FDC16d177Ff634e39EB1871b5EFD6c81a3CF'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },

//  {
//    pid: 3,
//    risk: 3,
//    isTokenOnly: true,
//    lpSymbol: 'WMATIC',
//    decimal: 18,
//    lpAddresses: {
//      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
//    },
//    tokenSymbol: 'WMATIC',
//    tokenAddresses: {
//      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
//    },
//    quoteTokenSymbol: QuoteToken.USDC,
//    quoteTokenAdresses: contracts.usdc,
//  },

//  {
//    pid: 4,
//    risk: 3,
//    isTokenOnly: true,
//    lpSymbol: 'QUICK',
//    decimal: 18,
//    lpAddresses: {
//      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
//    },
//    tokenSymbol: 'QUICK',
//    tokenAddresses: {
//      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
//    },
//    quoteTokenSymbol: QuoteToken.USDC,
//    quoteTokenAdresses: contracts.usdc,
//  },

//  {
//    pid: 5,
//    risk: 3,
//    isTokenOnly: true,
//    lpSymbol: 'WETH',
//    decimal: 18,
//    lpAddresses: {
//      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
//    },
//    tokenSymbol: 'WETH',
//    tokenAddresses: {
//      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
//    },
//    quoteTokenSymbol: QuoteToken.USDC,
//    quoteTokenAdresses: contracts.usdc,
//  },

//  {
//    pid: 6,
//    risk: 3,
//    isTokenOnly: true,
//    lpSymbol: 'WBTC',
//    decimal: 6,
//    lpAddresses: {
//      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
//    },
//    tokenSymbol: 'WBTC',
//    tokenAddresses: {
//      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
//    },
//    quoteTokenSymbol: QuoteToken.USDC,
//    quoteTokenAdresses: contracts.usdc,
//  },



//  {
//    pid: 7,
//    risk: 1,
//    isTokenOnly: true,
//    lpSymbol: 'USDT',
//    decimal: 6,
//    lpAddresses: {
//      137: '0x2cf7252e74036d1da831d11089d326296e64a728'
//    },
//    tokenSymbol: 'USDT',
//    tokenAddresses: {
//      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
//    },
//    quoteTokenSymbol: QuoteToken.USDC,
//    quoteTokenAdresses: contracts.usdc,
//  },

//  {
//    pid: 8,
//    risk: 3,
//    isTokenOnly: true,
//    lpSymbol: 'AAVE',
//    decimal: 18,
//    lpAddresses: {
//      137: '0x7c76b6b3fe14831a39c0fec908da5f17180df677'
//    },
//    tokenSymbol: 'AAVE',
//    tokenAddresses: {
//      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
//    },
//    quoteTokenSymbol: QuoteToken.USDC,
//    quoteTokenAdresses: contracts.usdc,
//  },

//  {
//    pid: 9,
//    risk: 5,
//    isTokenOnly: true,
//    lpSymbol: 'LINK',
//    decimal: 18,
//    lpAddresses: {
//      137: '0x70cee55c98f6da2685807611f115ea737d4a248e'
//    },
//    tokenSymbol: 'LINK',
//    tokenAddresses: {
//      137: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39'
//    },
//    quoteTokenSymbol: QuoteToken.USDC,
//    quoteTokenAdresses: contracts.usdc,
//  },




]

export default farms
