import { connect } from "react-redux";
import AddProductOrganism from "../../organisms/products/add";
import {
  addProduct,
  addProductReset,
  getCurrencies,
} from "@/src/store/product/actions";

const mapStateToProps = (state: any) => ({
  isLoading: state?.product?.isLoading,
  error: state?.product?.error,
  addProductSucceed: state?.product?.addProductSucceed,
  currencies: state?.product?.currencies,
});

const mapDispatchToProps = (dispatch: any) => ({
  addProduct: (payload: any) => dispatch(addProduct(payload)),
  getCurrencies: (payload: any) => dispatch(getCurrencies(payload)),
  resetAddProduct: () => dispatch(addProductReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductOrganism);
