import * as types from '../../constants/ActionsType'

export const addItem = (label, color) => {
  return {
    type: types.ADD_ITEM,
    label: label,
    color: color
  }
}

export const editItem = (item) => {
  return {
    type: types.EDIT_ITEM,
    payload: item
  }
}

export const onRemove = (id) => {
  return {
    type: types.ON_REMOVE,
    id: id
  }
}

export const onCompleted = (id) => {
  return {
    type: types.ON_COMPLEDTED,
    id: id
  }
}

export const onRemoveCompleted = (item) => {
  return {
    type: types.ON_REMOVE_COMPLETED,
    payload: item
  }
}
