import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../atoms/app-text";

interface CategoryCardProps {}

export function CategoryCard({}: CategoryCardProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.container}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 16,
    right: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 111,
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "400",
  },
});
