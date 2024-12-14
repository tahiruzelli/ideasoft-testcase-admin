import { useEffect } from "react";
import { View } from "react-native";
import { FAB } from "../../molecules/FAB";

export default function ProductsOrganism({
  products = [],
  getProducts = () => {},
}) {
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {}, [products]);
  return (
    <View style={{ flex: 1 }}>
      <FAB title={"Add Product"} onTap={() => {}}></FAB>
    </View>
  );
}
