/*
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE'
}

/*
 * Reducers
 */
const INITIAL_STATE = {
  data: []
}

export default function users (state = INITIAL_STATE, action) {
  console.log(action.type)

  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.data]
      }
    default:
      return state
  }
}

/*
 * Actions
 */
export const Creators = {
  addRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user }
  }),

  addSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  })
}
