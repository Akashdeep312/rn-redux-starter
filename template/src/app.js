import React from "react";
import { Provider } from "react-redux";
import configureStore from "@store/configure-store.js";
import { PersistGate } from "redux-persist/es/integration/react";

import Router from "@appComponents/router.js";

const { persistor, store } = configureStore;

export default App = props => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
);
