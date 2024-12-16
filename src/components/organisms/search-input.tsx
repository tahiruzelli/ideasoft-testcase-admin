import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet, TextInput, View } from "react-native";
import { SearchIcon } from "../atoms/icons";
export default function SearchInput(props: any) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Hızlı Arama"
        placeholderTextColor={Colors.paragraphColor}
        selectionColor={Colors.navy}
        onChangeText={(value: string) => {
          props.onChange(value);
        }}
      ></TextInput>
      <SearchIcon></SearchIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.background,
    marginHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
