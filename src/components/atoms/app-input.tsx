import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet, TextInput, View } from "react-native";
import DropShadow from "react-native-drop-shadow";

export default function AppInput(props: any) {
  return (
    <DropShadow style={styles.container}>
      <TextInput
        selectionColor={Colors.black}
        style={{ fontSize: 14, fontWeight: "400" }}
        placeholder={props.placeholder ?? ""}
        placeholderTextColor={"#AFAFAF"}
        onChangeText={props.onChange}
        keyboardType={props.keyboardType ?? "default"}
        defaultValue={props.defaultValue}
        value={props.value}
      ></TextInput>
    </DropShadow>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 16,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
});
