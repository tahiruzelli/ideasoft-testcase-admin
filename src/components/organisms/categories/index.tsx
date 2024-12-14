import { ScrollView, View } from "react-native";
import { FAB } from "../../molecules/FAB";
import { CategoryCard } from "../../molecules/category-card";
import AppBar from "../../atoms/app-bar";
import { Colors } from "@/src/utils/constans/colors";
import { useEffect, useState } from "react";

export default function CategoriesOrganism({
  categories = [],
  getCategories = () => {},
  setCurrentCategory = (payload: any) => {},
}) {
  const [stateCategories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);
  useEffect(() => {
    console.log("view", categories);
    if (categories.length !== 0) {
      setCategories(categories);
    }
  }, [categories]);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <AppBar></AppBar>
      <FAB title={"Add Categories"} onTap={() => {}}></FAB>
      <ScrollView style={{ paddingHorizontal: 16, paddingTop: 20 }}>
        {stateCategories.map((element, index) => {
          return <CategoryCard key={index} category={element}></CategoryCard>;
        })}
      </ScrollView>
    </View>
  );
}
