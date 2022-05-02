import { combineReducers } from "redux"
import { reducer } from './reducer'

const reduce = combineReducers({
    allProducts:reducer,


})
export default reduce