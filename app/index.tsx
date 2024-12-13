import React from "react";
import SplashTemplate from "../src/components/templates/splash";
import { Provider } from "react-redux";
import store from "@/src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <SplashTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
