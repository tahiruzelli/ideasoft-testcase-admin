import { ScrollView, View } from "react-native";
import { FAB } from "../../molecules/FAB";
import AppBar from "../../atoms/app-bar";
import { Colors } from "@/src/utils/constans/colors";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";
import { CategoryCard } from "../../molecules/category/category-card";
import WarningAnimation from "../../../../assets/animations/warning.json";
import { AppModal } from "../../atoms/app-modal";

export default function CategoriesOrganism({
  categories = [],
  getCategories = () => {},
  deleteCategory = ({}) => {},
}) {
  useEffect(() => {
    getCategories();
  }, []);
  const [deletEModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedID, setSelectedId] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <AppModal
        isVisible={deletEModalVisible}
        okFunction={() => {
          deleteCategory({ id: selectedID });
          const element = categories.filter(
            (element: any) => element.id === selectedID
          )[0];
          const index = categories.indexOf(element);
          categories.splice(index, 1);
          setDeleteModalVisible(false);
        }}
        title={"Warning!"}
        message={"You are about to delete this product. Are you sure?"}
        closeFunction={() => {
          setDeleteModalVisible(false);
        }}
        image={WarningAnimation}
      ></AppModal>
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
                router.push({
                  pathname: PageRoutes.categoryAdd,
                  params: element,
                });
              }}
              onLongPress={() => {
                setSelectedId(element.id);
                setDeleteModalVisible(true);
              }}
            ></CategoryCard>
          );
        })}
      </ScrollView>
    </View>
  );
}
