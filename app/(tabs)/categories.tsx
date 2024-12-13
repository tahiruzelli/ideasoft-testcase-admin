import React from "react";
import CategoriesTemplate from "../../src/components/templates/products";
import { Provider } from "react-redux";
import store from "@/src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <CategoriesTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
