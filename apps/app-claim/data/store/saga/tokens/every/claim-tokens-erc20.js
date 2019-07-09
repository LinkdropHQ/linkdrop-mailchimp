import { put, call } from 'redux-saga/effects'
import { claimTokens } from 'data/api/tokens'
const ls = window.localStorage

const generator = function * ({ payload }) {
  try {
    const { address, fingerprint, email, uid } = payload
    yield put({ type: 'USER.SET_LOADING', payload: { loading: true } })
    const { success, txHash, message } = yield call(claimTokens, { address, fingerprint, email, uid })

    if (success) {
      ls && ls.setItem('txHash', txHash)
      yield put({ type: 'TOKENS.SET_TRANSACTION_ID', payload: { transactionId: txHash } })
    } else {
      if (message) {
        yield put({ type: 'USER.SET_ERRORS', payload: { errors: [ERRORS[message] || 'SOME_ERROR_OCCURED'] } })
      }
    }
    yield put({ type: 'USER.SET_LOADING', payload: { loading: false } })
  } catch (e) {
    console.error(e)
  }
}

export default generator

const ERRORS = {
  'All links have been claimed': 'ALL_LINKS_CLAIMED',
  'Campaign is over': 'CAMPAIGN_OVER',
  'Oops! Something went wrong': 'SOME_ERROR_OCCURED',
  'Oops! Something went wrong!': 'SOME_ERROR_OCCURED',
  'You have already claimed tokens': 'YOU_CLAIMED_TOKENS',
  'This device has already claimed tokens': 'USED_DEVICE',
  'No more rewards are allowed to claim': 'NO_MORE_REWARDS_ALLOWED',
  'All rewards have been claimed': 'ALL_REWARDS_CLAIMED'
}
