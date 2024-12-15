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
import { router, useLocalSearchParams } from "expo-router";
export default function AddCategoryOrganism({
  isLoading = false,
  addCategorySucceded = false,
  addCategory = ({}) => {},
  editCategory = ({}) => {},
  resetAddCategory = () => {},
}) {
  const [name, setName] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [showcaseContent, setShowcaseContent] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useLocalSearchParams();
  useEffect(() => {
    resetAddCategory();
    if (Object.keys(params).length !== 0) {
      setName(params["name"]);
      setMetaKeywords(params["metaKeywords"]);
      setShowcaseContent(params["showcaseContent"]);
      setSelectedIndex(Number(params["status"]));
    }
  }, []);
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
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
        <AppInput
          placeholder={"Name"}
          onChange={setName}
          value={name ?? ""}
        ></AppInput>
        <AppInput
          placeholder={"Meta Keywords"}
          onChange={setMetaKeywords}
          value={metaKeywords ?? ""}
        ></AppInput>
        <AppInput
          placeholder={"Showcase Content"}
          onChange={setShowcaseContent}
          value={showcaseContent ?? ""}
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
          title={
            Object.keys(params).length !== 0 ? "Edit Category" : "Add Category"
          }
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
              if (Object.keys(params).length !== 0) {
                editCategory({
                  name: name,
                  showcaseContent: showcaseContent,
                  metaKeywords: metaKeywords,
                  status: selectedIndex,
                  id: Number(params["id"]),
                });
              } else {
                addCategory({
                  name: name,
                  showcaseContent: showcaseContent,
                  metaKeywords: metaKeywords,
                  status: selectedIndex,
                });
              }
            }
          }}
          isLoading={loading}
        ></AppButton>
      </View>
    </View>
  );
}
