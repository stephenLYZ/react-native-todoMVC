const types = {
  ADD_ITEM: 'ADD_ITEM',
  ON_REMOVE: 'ON_REMOVE',
  ON_COMPLEDTED: 'ON_COMPLEDTED',
  ON_REMOVE_COMPLETED: 'ON_REMOVE_COMPLETED'
}

export const actionCreators = {
  addItem: (item) => {
    return {
      type: types.ADD_ITEM,
      payload: item
    }
  },
  onRemove: (index) => {
    return {
      type: types.ON_REMOVE,
      payload: index
    }
  },
  onCompleted: (index) => {
    return {
      type: types.ON_COMPLEDTED,
      payload: index
    }
  },
  onRemoveCompleted: (item) => {
    return {
      type: types.ON_REMOVE_COMPLETED,
      payload: item
    }
  }
}

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action
  const { items } = state

  switch(type) {
    case types.ADD_ITEM: {
      return {
        ...state,
        items: [
          { label: payload, completed: false }, ...items
        ]
      }
    }
    case types.ON_REMOVE: {
      return {
        ...state,
        items: items.filter((item, i) => i !== payload),
      }
    }
    case types.ON_COMPLEDTED: {
      return {
        ...state,
        items: items.map((item, i) => {
          if (i === payload) {
            return {label: item.label, completed: !item.completed}
          }
          return item
        }),
      }
    }
    case types.ON_REMOVE_COMPLETED: {
      return {
        ...state,
        items: items.filter((item, i) => !item.completed)
      }
    }
    default: {
      return state
    }
  }
}
