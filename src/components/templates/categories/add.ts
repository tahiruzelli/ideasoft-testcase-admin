import { connect } from "react-redux";
import CategoriesOrganism from "../../organisms/categories/add";
import {
  addCategory,
  AddCategoryReset,
  editCategory,
} from "@/src/store/category/actions";

const mapStateToProps = (state: any) => ({
  isLoading: state?.category?.isLoading,
  error: state?.category?.error,
  addCategorySucceded: state?.category?.addCategorySucceded,
});

const mapDispatchToProps = (dispatch: any) => ({
  addCategory: (payload: any) => dispatch(addCategory(payload)),
  editCategory: (payload: any) => dispatch(editCategory(payload)),
  resetAddCategory: () => dispatch(AddCategoryReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesOrganism);
