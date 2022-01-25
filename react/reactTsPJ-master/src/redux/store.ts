// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { BarleftSlice } from "./nbmBarLeft/slice";
import newBarLeftReducers from "../redux/nbmBarLeft/newBarLeftReducers";
import { BarRightSlice } from "./nbmBarRight/slice";
import { BarSubSlice } from "./nbmBarSub/slice";
import { HpFlashSlice } from "./nbmHpFlash/slice";
import { HpRecSlice } from "./nbmHpRec/slice";
import { goodsSearchSlice } from "./nbmSearch/slice";
import { DetailIntroSlice } from "./detailIntro/slice";
import { DetaiCarousalSlice } from "./detaiCarousal/slice";
import detaiCarousalReducers from "../redux/detaiCarousal/detaiCarousalReducers";
import { DetailSizeSlice } from "./detailSize/slice";
import { DetailQASlice } from "./detailQA/slice";
import { QaInstertSlice } from "./detailQA/insertQaSlice";
import { DetailReviewSlice } from "./detailReview/slice";
import detailReviewReducers from "../redux/detailReview/detailReviewReducers";
import { ShoppingCartSlice } from "./nbmCart/slice";
import { CampaignInfoSlice } from "./campaign/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

export type RootReducerIF = {
  // qaSannkou: typeof QaSannkouSlice.reducer;
  // detailQA: typeof DetailQASlice.reducer;
};

const rootReducer = combineReducers({
  nbmCategories: BarleftSlice.reducer,
  barLeft: newBarLeftReducers,
  nbmCarousels: BarRightSlice.reducer,
  nbmBarSub: BarSubSlice.reducer,
  newGoodses: HpFlashSlice.reducer,
  goodsRecommend: HpRecSlice.reducer,
  goodsSearch: goodsSearchSlice.reducer,
  detailIntro: DetailIntroSlice.reducer,
  detaiCarousal: DetaiCarousalSlice.reducer,
  detaiCarousalReducer: detaiCarousalReducers,
  detailSize: DetailSizeSlice.reducer,
  detailQA: DetailQASlice.reducer,
  qaInsert: QaInstertSlice.reducer,
  detailReview: DetailReviewSlice.reducer,
  detailReviewReducer: detailReviewReducers,
  shoppingCart: ShoppingCartSlice.reducer,
  campaign: CampaignInfoSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog],
  devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
