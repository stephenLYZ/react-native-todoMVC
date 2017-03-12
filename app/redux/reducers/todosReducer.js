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
            label: action.payload,
            color: action.color,
            completed: false
          },
          ...items
        ]
      }
    default:
      return state
  }
}

export default todosReducer
