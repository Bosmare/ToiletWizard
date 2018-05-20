import {call, put, takeLatest} from 'redux-saga/effects'
import {getAllToilets} from './API.js'

function* ToiletSaga() {
  const response = yield call(getAllToilets)
  yield (
    response.error
      ? yield put({type: 'TOILETS_ERROR', error: response.error})
      : yield put({type: 'TOILETS_SUCCESS', toiletData: response})
  )
}

export function* rootSaga() {
  yield takeLatest('TOILETS_REQUESTED', ToiletSaga)
}