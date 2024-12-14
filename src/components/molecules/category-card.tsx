import { Colors } from "@/src/utils/constans/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../atoms/app-text";
import DropShadow from "react-native-drop-shadow";
import { CopyIcon } from "../atoms/icons";
import { useState } from "react";
import { AppModal } from "../atoms/app-modal";
import SuccessAnimation from "../../../assets/animations/success.json";
import * as Clipboard from "expo-clipboard";

interface CategoryCardProps {
  category: any;
}
// name, showcaseContent, metaKeywords, createdAt, status (1 aktif 0 kapali), id
export function CategoryCard({ category }: CategoryCardProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  return (
    <TouchableOpacity onPress={() => {}}>
      <AppModal
        isVisible={visible}
        okFunction={() => {
          setVisible(false);
        }}
        title={"OK"}
        message={"You have successfully copied the ID" + "-" + category.id}
        image={SuccessAnimation}
      ></AppModal>
      <DropShadow
        style={[
          styles.container,
          {
            backgroundColor:
              category.status === 0 ? Colors.errorLight : Colors.successLight,
          },
        ]}
      >
        <View>
          <AppText style={styles.titleStyle}>{category.name}</AppText>
          <AppText style={styles.descriptionStyle}>
            {category.showcaseContent} - {category.metaKeywords}
          </AppText>
        </View>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
            Clipboard.setStringAsync(category.id);
          }}
        >
          <CopyIcon></CopyIcon>
        </TouchableOpacity>
      </DropShadow>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: Colors.white,
    marginBottom: 12,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleStyle: {
    color: Colors.navy,
    fontSize: 14,
    fontWeight: "400",
  },
  descriptionStyle: {
    color: Colors.navy,
    fontSize: 12,
    fontWeight: "200",
  },
});
