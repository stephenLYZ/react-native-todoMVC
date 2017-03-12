import * as types from '../../constants/ActionsType'

const initialState = {
  index: 0
}

const navigatorReducer = (state = initialState, action) => {
  const { type, payload } = action
  const { index } = state

  switch (type) {
    case types.SWITCH_TAB:
      return {
        ...state,
        index: payload
      }
    default: {
      return state
    }
  }
}

export default navigatorReducer
