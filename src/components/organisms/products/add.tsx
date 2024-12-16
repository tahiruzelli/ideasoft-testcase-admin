import { Colors } from "@/src/utils/constans/colors";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppBar from "../../atoms/app-bar";
import AppInput from "../../atoms/app-input";
import AddCategoryStatusSelect from "../../molecules/category/status-radio";
import { ButtonTypes } from "@/src/utils/enums/button-types";
import AppButton from "../../atoms/app-button";
import { AppModal } from "../../atoms/app-modal";
import WarningAnimation from "../../../../assets/animations/warning.json";
import { isNumber } from "@/src/utils/helpers/is-number";
import DropDownSheet from "../../atoms/bottom-sheet-select";
import { ArrowDownIcon } from "../../atoms/icons";
import AppText from "../../atoms/app-text";
import dimensions from "@/src/utils/helpers/dimensions";

export default function AddProductOrganism({
  isLoading = false,
  categories = [],
  addProductSucceed = false,
  currencies = [],
  addProduct = ({}) => {},
  getCurrencies = () => {},
  resetAddProduct = () => {},
  getCategories = () => {},
}) {
  //name, stockAmount, price1, currency, status, image?
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [stockAmount, setstockAmount] = useState(0);
  const [price1, setprice1] = useState(0);
  const [currency, setcurrency] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [currencyModalVisible, setCurrencyModalVisible] = useState(false);
  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  useEffect(() => {
    resetAddProduct();
    getCurrencies();
    getCategories();
  }, []);

  useEffect(() => {
    if (addProductSucceed === true) {
      router.back();
    }
  }, [addProductSucceed]);
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

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
      <AppBar title={"Add Product"}></AppBar>
      <View style={{ paddingHorizontal: 16 }}>
        <AppInput
          placeholder={"Name"}
          onChange={setName}
          value={name ?? ""}
        ></AppInput>
        <AppInput
          placeholder={"Stock Amount"}
          onChange={setstockAmount}
          value={stockAmount ?? ""}
          keyboardType={"numeric"}
        ></AppInput>
        <AppInput
          placeholder={"Price"}
          onChange={setprice1}
          value={price1 ?? ""}
          keyboardType={"numeric"}
        ></AppInput>
        <TouchableOpacity onPress={() => setCurrencyModalVisible(true)}>
          <View style={styles.DDcontainer}>
            <DropDownSheet
              title="Choose Currency"
              isVisible={currencyModalVisible}
              closeModal={() => setCurrencyModalVisible(false)}
              height={dimensions()._height * 0.9}
              data={currencies}
              applyFunction={(value: {}) => {
                setcurrency(value);
              }}
              clearFunction={() => {
                setcurrency({});
              }}
              multipleSelect={false}
              label="label"
            ></DropDownSheet>
            <View>
              <AppText style={styles.DDTitleStyle}>{"Select Currency"}</AppText>
              <AppText style={styles.DDvalueStyle}>
                {currency.label ?? "There is no selected Curreny"}
              </AppText>
            </View>
            <ArrowDownIcon></ArrowDownIcon>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCategoryModalVisible(true)}>
          <View style={styles.DDcontainer}>
            <DropDownSheet
              title="Choose Category"
              isVisible={categoryModalVisible}
              closeModal={() => setCategoryModalVisible(false)}
              height={dimensions()._height * 0.9}
              data={categories}
              applyFunction={(value: {}) => {
                setSelectedCategory(value);
              }}
              clearFunction={() => {
                setSelectedCategory({});
              }}
              multipleSelect={false}
              label="name"
            ></DropDownSheet>
            <View>
              <AppText style={styles.DDTitleStyle}>{"Select Category"}</AppText>
              <AppText style={styles.DDvalueStyle}>
                {selectedCategory.name ?? "There is no selected Category"}
              </AppText>
            </View>
            <ArrowDownIcon></ArrowDownIcon>
          </View>
        </TouchableOpacity>
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
          title={"Add Product"}
          onTap={() => {
            if (name.length < 3) {
              setModalVisible(true);
              setModalMessage("Name can not be shorted then 3 char");
            } else if (
              stockAmount < 1 ||
              isNumber(Number(stockAmount)) === false
            ) {
              setModalVisible(true);
              setModalMessage("Stock amount can not be less then 1");
            } else if (price1 < 1 || isNumber(Number(price1)) === false) {
              setModalVisible(true);
              setModalMessage("Price can not be less then 1");
            } else if (Object.keys(currency).length === 0) {
              setModalVisible(true);
              setModalMessage("You have to select a currency type");
            } else if (Object.keys(selectedCategory).length === 0) {
              setModalVisible(true);
              setModalMessage("You have to select a Category");
            } else {
              addProduct({
                name: name,
                stockAmount: stockAmount,
                price1: price1,
                currency: currency,
                status: selectedIndex,
                category: selectedCategory,
              });
            }
          }}
          isLoading={loading}
        ></AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DDcontainer: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    paddingHorizontal: 16,
    marginTop: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  DDTitleStyle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#AFAFAF",
    marginTop: 10,
  },
  DDvalueStyle: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 10,
    fontWeight: "400",
    color: Colors.black,
  },
});
