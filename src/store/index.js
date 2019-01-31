import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import promiseMiddleware from "redux-promise-middleware"
import reducer from "../reducer"

if (process.env.NODE_ENV !== "live") {
  middleware.push(createLogger)
}

const middleware = [thunk, promiseMiddleware()]
const store = createStore(reducer, applyMiddleware(...middleware))
export default store
