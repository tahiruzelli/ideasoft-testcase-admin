import { View, StyleSheet } from "react-native";
import AppText from "./app-text";
import Modal from "react-native-modal";
import AppButton from "./app-button";
import { ButtonTypes } from "@/src/utils/enums/button-types";
import { Colors } from "@/src/utils/constans/colors";
import AppAnimation from "./app-animation";

interface ModalProps {
  isVisible: boolean;
  okFunction: () => void;
  title: string;
  message: string;
  buttonText?: string;
  secondButton?: any;
  image?: any;
  height?: number;
  closeFunction?: () => void;
}

export const AppModal: React.FC<ModalProps> = ({
  isVisible,
  okFunction,
  title,
  message,
  buttonText,
  secondButton,
  image,
  height,
  closeFunction,
}) => {
  return (
    <Modal
      testID={"modal"}
      isVisible={isVisible}
      style={styles.view}
      onBackdropPress={() => closeFunction()}
    >
      <View style={[styles.content, { height: height ?? undefined }]}>
        {Image(image)}
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.description}>{message}</AppText>
        <View style={{ flexDirection: "row", marginTop: 32, marginBottom: 20 }}>
          <View
            style={{ flex: 1, display: secondButton == null ? "none" : "flex" }}
          >
            {secondButton}
          </View>
          <View style={{ flex: 1 }}>
            <AppButton
              type={ButtonTypes.primary}
              title={buttonText ?? "OK"}
              onTap={() => {
                okFunction();
              }}
              borderRadius={111}
            ></AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.default,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    color: Colors.navy,
    marginBottom: 12,
    fontWeight: "500",
    marginVertical: 12,
    textAlign: "center",
  },
});

function Image(image?: any) {
  if (image == null) {
    return <View></View>;
  } else {
    return <AppAnimation animation={image}></AppAnimation>;
  }
}
