import {combineReducers} from "redux";

function items(state = "", action) {
  if (action.type === "ITEMS_LOADED") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  items
});
export default rootReducer;
