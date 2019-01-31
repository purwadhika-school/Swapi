import { PENDING, FULFILLED, REJECTED } from "redux-promise-middleware"
import { combineReducers } from "redux"
import { GET_DATA_SWAPI } from "../action"

const dataSwapi = (
  state = {
    isFetching: false,
    items: {}
  },
  action
) => {
  switch (action.type) {
    case `${GET_DATA_SWAPI}_PENDING`:
      return {
        ...state,
        isFetching: true
      }

    case `${GET_DATA_SWAPI}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        items: action.payload
      }

    case `${GET_DATA_SWAPI}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        items: {}
      }

    default:
      return state
  }
}

const reducers = combineReducers({
  dataSwapi,
})

export default reducers
