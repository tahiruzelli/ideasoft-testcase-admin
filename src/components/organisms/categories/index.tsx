import { ScrollView, View } from "react-native";
import { FAB } from "../../molecules/FAB";
import { CategoryCard } from "../../molecules/category-card";
import AppBar from "../../atoms/app-bar";
import { Colors } from "@/src/utils/constans/colors";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";

export default function CategoriesOrganism({
  categories = [],
  getCategories = () => {},
  setCurrentCategory = (payload: any) => {},
}) {
  useEffect(() => {
    console.log(categories);
    getCategories();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <AppBar></AppBar>
      <FAB
        title={"Add Categories"}
        onTap={() => {
          router.push(PageRoutes.categoryAdd);
        }}
      ></FAB>
      <ScrollView
        style={{
          paddingHorizontal: 16,
          paddingTop: 20,
          zIndex: 1,
        }}
      >
        {categories.map((element, index) => {
          return (
            <CategoryCard
              key={index}
              category={element}
              onTap={() => {
                // setCurrentCategory(element);
                router.push({
                  pathname: PageRoutes.categoryAdd,
                  params: element,
                });
              }}
            ></CategoryCard>
          );
        })}
      </ScrollView>
    </View>
  );
}
