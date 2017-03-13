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

    case types.ON_REMOVE:
      return {
        ...state,
        items: items.filter( (item) => item.id !== action.id)
      }
    default:
      return state
  }
}

export default todosReducer
