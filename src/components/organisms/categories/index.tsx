import { View } from "react-native";
import { FAB } from "../../molecules/FAB";
import { CategoryCard } from "../../molecules/category-card";
import AppBar from "../../atoms/app-bar";

export default function CategoriesOrganism() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar></AppBar>
      <FAB title={"Add Categories"} onTap={() => {}}></FAB>
      <CategoryCard></CategoryCard>
    </View>
  );
}
