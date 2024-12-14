import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import AppText from "./app-text";
import { ButtonProperties, ButtonTypes } from "@/src/utils/enums/button-types";

interface ButtonProps {
  type: ButtonTypes;
  title: string;
  onTap: () => void;
  isLoading?: boolean;
  borderRadius?: number;
  paddingHorizontal?: number;
  color?: string;
  textColor?: string;
}

const AppButton: React.FC<ButtonProps> = ({
  type,
  title,
  onTap,
  isLoading,
  borderRadius,
  paddingHorizontal,
  color,
  textColor,
}) => {
  return (
    <TouchableOpacity onPress={() => onTap()}>
      <View
        style={{
          backgroundColor: color ?? ButtonProperties[type].backgroundColor,
          borderColor: ButtonProperties[type].borderColor,
          borderWidth: ButtonProperties[type].borderColor == null ? 0 : 1,
          marginHorizontal: paddingHorizontal ?? 16,
          borderRadius: borderRadius ?? 8,
          paddingVertical: 18,
        }}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <AppText
            style={{
              color: textColor ?? ButtonProperties[type].textColor,
              alignSelf: "center",
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            {title}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
