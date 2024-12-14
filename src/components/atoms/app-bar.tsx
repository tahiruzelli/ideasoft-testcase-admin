import { Colors } from "@/src/utils/constans/colors";
import { View, Image, StyleSheet } from "react-native";
import dimensions from "@/src/utils/helpers/dimensions";
import AppText from "./app-text";

export default function AppBar(props: any) {
  const appBarHeight = 0.1026785714 * dimensions()._height;
  return (
    <View style={[styles.body, { height: appBarHeight }]}>
      {props.title === undefined ? (
        <Image source={require("../../../assets/images/fexx-logo.png")} />
      ) : (
        <AppText style={styles.titleStyle}>{props.title}</AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingBottom: 4,
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.navy,
  },
});
