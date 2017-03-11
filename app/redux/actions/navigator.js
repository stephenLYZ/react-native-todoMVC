const types = {
  SWITCH_TAB: 'SWITCH_TAB'
}

export const switchTab = (index) => {
  return {
    type: types.SWITCH_TAB,
    payload: index
  }
}
