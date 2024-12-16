import React from "react";
import AddProductTemplate from "../src/components/templates/products/add";
import { Provider } from "react-redux";
import store from "@/src/store";

const IndexPage = () => {
  return (
    <>
      <Provider store={store}>
        <AddProductTemplate />
      </Provider>
    </>
  );
};
export default IndexPage;
