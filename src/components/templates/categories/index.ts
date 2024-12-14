import { connect } from "react-redux";
import CategoriesOrganism from "../../organisms/categories";
import {
  getCategories,
  setCurrentCategory,
} from "@/src/store/category/actions";

const mapStateToProps = (state: any) => ({
  categories: state?.category?.categories,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategories: (payload: any) => dispatch(getCategories(payload)),
  setCurrentCategory: (payload: any) => dispatch(setCurrentCategory(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesOrganism);
