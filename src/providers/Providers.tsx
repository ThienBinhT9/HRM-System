import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { px2remTransformer, StyleProvider } from "@ant-design/cssinjs";

import store, { persistor } from "../redux/store.ts";

import AppRoute from "../routers/AppRoute.tsx";

const px2rem = px2remTransformer({});

function Providers() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleProvider transformers={[px2rem]}>
          <ToastContainer />
          <AppRoute />
        </StyleProvider>
      </PersistGate>
    </Provider>
  );
}

export default Providers;
