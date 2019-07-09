export default {
  titles: {
    needWallet: 'You need Trust Wallet to claim {{symbol}}',
    haveAnother: 'Have another wallet?',
    claimTo: 'Claim to: <span>{{wallet}}</span>',
    transactionInProcess: 'Transaction is processing',
    claiming: 'Claiming...',
    instructions: 'It may take a few minutes. You can come back later.',
    seeDetails: 'See details on <a target="_blank" href={{transactionLink}}>Etherscan</a>',
    tokensClaimed: '<span>{{tokens}}</span> claimed',
    howToClaim: 'How to claim tokens to {{wallet}}',
    agreeWithTerms: 'By claiming this link you agree to the <a href={{termsHref}}>Terms</a> & <a href={{privacyHref}}>Privacy</a>'
  },
  buttons: {
    useWallet: 'Use {{wallet}}',
    copyLink: 'Copy link'
  },
  errors: {
    LINK_EXPIRED: {
      title: 'Expired',
      description: 'Sorry, link is expired'
    },
    LINK_CANCELED: {
      title: 'Canceled',
      description: 'Sorry, link is canceled'
    },
    LINK_FAILED: {
      title: 'Failed',
      description: 'Oops, something went wrong'
    },
    ALL_LINKS_CLAIMED: {
      title: 'All rewards claimed',
      description: 'You can still create your avatar and claim your name'
    },
    CAMPAIGN_OVER: {
      title: 'Campaign is over',
      description: ''
    },
    SOME_ERROR_OCCURED: {
      title: 'Oops! Something went wrong',
      description: ''
    },
    YOU_CLAIMED_TOKENS: {
      title: 'You have already claimed tokens',
      description: ''
    },
    USED_DEVICE: {
      title: 'This device has already claimed tokens',
      description: ''
    },
    NO_MORE_REWARDS_ALLOWED: {
      title: 'No more rewards are allowed to claim',
      description: ''
    },
    ALL_REWARDS_CLAIMED: {
      title: 'All rewards have been claimed',
      description: ''
    },
    NETWORK_NOT_SUPPORTED: {
      title: 'Network is not supported',
      description: 'Switch to {{network}}',
      instructions: {
        _1: '1. Go to <span>Settings</span> in your Wallet',
        _2: '2. Swich Network to <span>{{network}}</span>',
        _3: '3. Back to wallet’s DApp browser then reload the claiming link and follow instructions'
      }
    },
    NEED_METAMASK: {
      title: 'You need a wallet to claim tokens',
      description: '',
      instructions: {
        _1: '1. Download <a href="https://metamask.io/" target="_blank">Metamask</a>',
        _2: '2. Then just reload the claim page'
      }
    }
  },
  walletsInstructions: {
    common: {
      _1: {
        withUrl: '1. Download <a href={{href}}>{{title}}</a>',
        withNoUrl: '1. Download {{title}}'
      },
      _2: '2. Copy&Paste the claiming link in a wallet’s DApp browser'
    },
    deepLink: {
      _1: '1. Download <a href={{href}}>{{title}}</a>.',
      _2: '2. Return here and tap on the button below'
    }
  }
}
