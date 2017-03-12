import * as types from '../../constants/ActionsType'

export const switchTab = (index) => {
  return {
    type: types.SWITCH_TAB,
    payload: index
  }
}
