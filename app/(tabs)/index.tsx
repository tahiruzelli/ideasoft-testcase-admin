import React from "react";
import ProductsTemplate from "../../src/components/templates/products";
import { Provider } from "react-redux";
import store from "@/src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <ProductsTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
