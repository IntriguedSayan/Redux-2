import {legacy_createStore} from "redux"
import { reducer } from "./AppReducer/reducer"


const store=legacy_createStore(reducer)



export {store}