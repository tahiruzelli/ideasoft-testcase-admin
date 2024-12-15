import { View } from "react-native";
import AppBar from "../../atoms/app-bar";
import { Colors } from "@/src/utils/constans/colors";
import AppButton from "../../atoms/app-button";
import { ButtonTypes } from "@/src/utils/enums/button-types";
import AppInput from "../../atoms/app-input";
import AddCategoryStatusSelect from "../../molecules/category/status-radio";
import { useEffect, useState } from "react";
import { AppModal } from "../../atoms/app-modal";
import WarningAnimation from "../../../../assets/animations/warning.json";
import { router } from "expo-router";
import { PageRoutes } from "@/src/utils/constans/page-routes";
export default function AddCategoryOrganism({
  isLoading = false,
  error = null,
  addCategorySucceded = false,
  addCategory = ({}) => {},
  resetAddCategory = () => {},
}) {
  const [name, setName] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [showcaseContent, setShowcaseContent] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    resetAddCategory();
  }, []);
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log(addCategorySucceded);
    if (addCategorySucceded === true) {
      router.back();
    }
  }, [addCategorySucceded]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <AppModal
        isVisible={isModalVisible}
        okFunction={() => {
          setModalVisible(false);
        }}
        title={"Warning!"}
        message={modalMessage}
        image={WarningAnimation}
      ></AppModal>
      <AppBar title={"Add Category"}></AppBar>
      <View style={{ paddingHorizontal: 16 }}>
        <AppInput placeholder={"Name"} onChange={setName}></AppInput>
        <AppInput
          placeholder={"Meta Keywords"}
          onChange={setMetaKeywords}
        ></AppInput>
        <AppInput
          placeholder={"Showcase Content"}
          onChange={setShowcaseContent}
        ></AppInput>
        <AddCategoryStatusSelect
          selectedIndex={selectedIndex}
          setSelectedIndex={(value: number) => {
            setSelectedIndex(value);
          }}
        ></AddCategoryStatusSelect>
      </View>
      <View style={{ position: "absolute", bottom: 34, right: 0, left: 0 }}>
        <AppButton
          type={ButtonTypes.primary}
          title={"Add Category"}
          onTap={() => {
            if (name.length < 3) {
              setModalVisible(true);
              setModalMessage(
                "Name of category's lenght must be longest then 3 char!"
              );
            } else if (metaKeywords === "") {
              setModalVisible(true);
              setModalMessage(
                "Meta Keywords can effect visibilty of your category. Please add keyword"
              );
            } else if (showcaseContent === "") {
              setModalVisible(true);
              setModalMessage(
                "Show case content can effect visibilty of your category. Please add content"
              );
            } else {
              addCategory({
                name: name,
                showcaseContent: showcaseContent,
                metaKeywords: metaKeywords,
                status: selectedIndex,
              });
            }
          }}
          isLoading={loading}
        ></AppButton>
      </View>
    </View>
  );
}
