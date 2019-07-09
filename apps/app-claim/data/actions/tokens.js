class Tokens {
  constructor (actions) {
    this.actions = actions
  }

  claimTokensERC20 ({ address, fingerprint, email, uid }) {
    this.actions.dispatch({ type: '*TOKENS.CLAIM_TOKENS_ERC20', payload: { address, fingerprint, email, uid } })
  }

  checkTransactionStatus ({ transactionId, chainId }) {
    this.actions.dispatch({ type: '*TOKENS.CHECK_TRANSACTION_STATUS', payload: { transactionId, chainId } })
  }

  checkIfClaimed () {
    this.actions.dispatch({ type: '*TOKENS.CHECK_IF_CLAIMED' })
  }
}

export default Tokens
