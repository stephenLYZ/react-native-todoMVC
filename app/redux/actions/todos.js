const types = {
  ADD_ITEM: 'ADD_ITEM',
  EDIT_ITEM: 'EDIT_ITEM',
  ON_REMOVE: 'ON_REMOVE',
  ON_COMPLEDTED: 'ON_COMPLEDTED',
  ON_REMOVE_COMPLETED: 'ON_REMOVE_COMPLETED'
}

export const addItem = (item) => {
  return {
    type: types.ADD_ITEM,
    payload: item
  }
}

export const editItem = (item) => {
  return {
    type: types.EDIT_ITEM,
    payload: item
  }
}

export const onRemove = (index) => {
  return {
    type: types.ON_REMOVE,
    payload: index
  }
}

export const onCompleted = (index) => {
  return {
    type: types.ON_COMPLEDTED,
    payload: index
  }
}

export const onRemoveCompleted = (item) => {
  return {
    type: types.ON_REMOVE_COMPLETED,
    payload: item
  }
}
