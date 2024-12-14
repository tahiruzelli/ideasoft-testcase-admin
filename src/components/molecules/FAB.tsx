import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../atoms/app-text";

interface FABProps {
  title: string;
  color?: string;
  onTap: () => void;
}

export function FAB({ title, color, onTap }: FABProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {
        onTap();
      }}
      style={[styles.container, { backgroundColor: color ?? Colors.primary }]}
    >
      <AppText style={styles.titleStyle}>{title}</AppText>
    </TouchableOpacity>
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
