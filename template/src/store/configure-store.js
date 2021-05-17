import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import rootReducer from "@store/store";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: hardSet,
  // WhiteList Includes the keys of reducers to persist
  whitelist: ["app"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isDevMode = Boolean(__DEV__);
const middleWares = isDevMode ? [ReduxThunk, ReduxLogger] : [ReduxThunk];

const store = createStore(persistedReducer, {}, applyMiddleware(...middleWares));

const persistor = persistStore(store);

export default { store, persistor };
