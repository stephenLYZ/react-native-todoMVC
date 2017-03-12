import * as types from '../../constants/ActionsType'

const initialState = {
  index: 0
}

export const reducer = (state = initialState, action) => {
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
