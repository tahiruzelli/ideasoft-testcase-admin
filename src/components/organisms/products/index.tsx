import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { FAB } from "../../molecules/FAB";
import AppBar from "../../atoms/app-bar";
import { Colors } from "@/src/utils/constans/colors";
import ProductCard from "../../molecules/product/product-card";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";
import WarningAnimation from "../../../../assets/animations/warning.json";
import { AppModal } from "../../atoms/app-modal";

export default function ProductsOrganism({
  products = [],
  getProducts = () => {},
  deleteProduct = ({}) => {},
}) {
  useEffect(() => {
    getProducts();
  }, []);

  const [deletEModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedID, setSelectedId] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <AppModal
        isVisible={deletEModalVisible}
        okFunction={() => {
          //delete
          deleteProduct({ id: selectedID });
          const element = products.filter(
            (element: any) => element.id === selectedID
          )[0];
          const index = products.indexOf(element);
          products.splice(index, 1);
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
        title={"Add Product"}
        onTap={() => {
          router.push(PageRoutes.productAdd);
        }}
      ></FAB>
      <FlatList
        data={products}
        renderItem={(item: any) => {
          return (
            <ProductCard
              item={item.item}
              onPress={() => {
                setSelectedId(item.item.id);
                setDeleteModalVisible(true);
              }}
            ></ProductCard>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Bir satırda 2 sütun gösterir
      />
    </View>
  );
}
