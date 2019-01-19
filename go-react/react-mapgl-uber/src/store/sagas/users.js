import { call, put, select } from 'redux-saga/effects'
import api from '../../services/api'

import { Creators as UsersActions } from '../ducks/users'

export function* addUser (action) {
  try {
    const { data } = yield call(
      api.get,
      `/users/${action.payload.user.username}`
    )

    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.id === data.id)
    )

    if (!isDuplicated) {
      const user = {
        id: data.id,
        latitude: action.payload.user.latitude,
        longitude: action.payload.user.longitude,
        image: data.avatar_url
      }

      yield put(UsersActions.addSuccess(user))
    }
  } catch (error) {}
}
