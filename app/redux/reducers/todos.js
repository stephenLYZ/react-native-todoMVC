import * as types from '../../constants/ActionsType'

const initialState = {
  items: [
    {
      id: '',
      label: '',
      color: '',
      completed: false
    }
  ]
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  const { items } = state

  switch (type) {
    case types.ADD_ITEM:
      return {
        ...state,
        items: [
          {
            id
          }
          ...items
        ]
      }
    default:

  }
}
