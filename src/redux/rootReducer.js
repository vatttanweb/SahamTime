import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import { ActionTypes } from './type';
// import { select_summaries_Reducer, selectSummaries } from "./summaries/index";
import { reducer_notificationAlert, } from "./notificationAlert";
// import { reducerLightstreamer, watcherLightstreamer } from "./lightstreamer";
// import { reducerStockRemain, watcherStockRemain } from "./stock/stock_select_remain";
// import { reducerOrderDetailsAggregates, watcherOrderDetailsAggregates } from "./stock/stock_select_details_aggregates";
// import { reducerCommonSummries , watcherCommonSummries } from "./commonSummries";


export const appReducer = combineReducers({
  // select_summaries_Reducer,
  reducer_notificationAlert,
  // reducerLightstreamer,
  // reducerStockRemain,
  // reducerOrderDetailsAggregates,
  // reducerCommonSummries,
});


export function* rootSaga() {
  yield all([
    // selectSummaries(),
    // watcherLightstreamer(),
    // watcherStockRemain(),
    // watcherOrderDetailsAggregates(),
    // watcherCommonSummries(),
  ]);
}



export const rootReducer = (state, action) => {

  if (action.type === ActionTypes.EMPTYALLREDUCERS) {
    state = undefined;
    localStorage.clear();
  }
  return appReducer(state, action);
};


