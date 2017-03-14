import * as types from '../../constants/ActionsType'
import uuid from 'uuid'

const initialState = {
  items: []
}

const todosReducer = (state = initialState, action) => {
  const { items } = state

  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: [
          {
            id: uuid.v4(),
            label: action.label,
            color: action.color,
            completed: false
          },
          ...items
        ]
      }

    case types.EDIT_ITEM:
      return {
        ...state,
        items: items.map((item) => {
          if(item.id === action.id) {
            return Object.assign({}, item, { label: action.label, color: action.color })
          }
          return item
        })
      }

    case types.ON_REMOVE:
      return {
        ...state,
        items: items.filter( (item) => item.id !== action.id)
      }

    case types.ON_COMPLEDTED:
      return {
        ...state,
        items: items.map((item) => {
          if(item.id === action.id) {
            return Object.assign({}, item, { completed: !item.completed })
          }
          return item
        })
      }

    case types.ON_REMOVE_COMPLETED:
      return {
        ...state,
        items: items.filter((item) => !item.completed)
      }
    default:
      return state
  }
}

export default todosReducer
