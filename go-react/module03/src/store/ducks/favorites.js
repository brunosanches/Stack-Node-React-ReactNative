/*
 * Types
 */
export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE'
}

/*
 * Reducers
 */
const INITIAL_SATE = {
  loading: false,
  error: null,
  data: []
}

export default function favorites (state = INITIAL_SATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, error: null, loading: true }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      }
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    default:
      return state
  }
}

/*
 * Actions
 */
export const Creators = {
  addRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository }
  }),

  addSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
}
