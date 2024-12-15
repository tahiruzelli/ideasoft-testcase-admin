import { StyleSheet, TouchableOpacity, View } from "react-native";
import RadioButton from "../../atoms/radio-button";
import AppText from "../../atoms/app-text";
import { useState } from "react";
import { Colors } from "@/src/utils/constans/colors";

export default function AddCategoryStatusSelect(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            props.setSelectedIndex(1);
          }}
        >
          <RadioButton isSelected={props.selectedIndex === 1}></RadioButton>
        </TouchableOpacity>
        <AppText style={styles.textStyle}>Active</AppText>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            props.setSelectedIndex(2);
          }}
        >
          <RadioButton isSelected={props.selectedIndex === 2}></RadioButton>
        </TouchableOpacity>
        <AppText style={styles.textStyle}>Deactive</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 12,
  },
  textStyle: {
    marginLeft: 12,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.navy,
  },
});
