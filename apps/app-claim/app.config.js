/* global CHAIN_ID, AMOUNT, SYMBOL, CLAIM_HOST, COMPANY_URL, COMPANY_TITLE */
const config = require('../../configs/claim.config.json')
const chainId = CHAIN_ID || config.defaultChainId
const defaultAmount = AMOUNT || config.defaultAmount
const defaultSymbol = SYMBOL || config.defaultSymbol
const claimHost = CLAIM_HOST || config.claimHost
const companyUrl = COMPANY_URL || config.companyUrl
const companyTitle = COMPANY_TITLE || config.companyTitle

module.exports = {
  chainId,
  defaultAmount,
  defaultSymbol,
  claimHost,
  companyUrl,
  companyTitle
}
