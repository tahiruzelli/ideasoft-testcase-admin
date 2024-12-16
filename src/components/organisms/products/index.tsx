import { useEffect } from "react";
import { FlatList, View } from "react-native";
import { FAB } from "../../molecules/FAB";
import AppBar from "../../atoms/app-bar";
import { Colors } from "@/src/utils/constans/colors";
import ProductCard from "../../molecules/product/product-card";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";

export default function ProductsOrganism({
  products = [],
  getProducts = () => {},
}) {
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {}, [products]);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
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
            <ProductCard item={item.item} onPress={() => {}}></ProductCard>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Bir satırda 2 sütun gösterir
      />
    </View>
  );
}
