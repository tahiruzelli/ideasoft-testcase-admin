import { connect } from "react-redux";
import {
  deleteProduct,
  getProducts,
  setCurrentProduct,
} from "@/src/store/product/actions";
import ProductsOrganism from "../../organisms/products";

const mapStateToProps = (state: any) => ({
  products: state?.product?.products,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProducts: (payload: any) => dispatch(getProducts(payload)),
  setCurrentProduct: (payload: any) => dispatch(setCurrentProduct(payload)),
  deleteProduct: (payload: any) => dispatch(deleteProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsOrganism);
