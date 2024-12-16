import dimensions from "@/src/utils/helpers/dimensions";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import DropShadow from "react-native-drop-shadow";
import { LikeIcon } from "../../atoms/icons";
import AppText from "../../atoms/app-text";
import { useState } from "react";
import { Colors } from "@/src/utils/constans/colors";

export default function ProductCard(props: any) {
  const [isFavorise, setIsFavorite] = useState(false);

  const emptyImageUrl: string =
    "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png";

  return (
    <TouchableOpacity
      onLongPress={() => {
        props.onPress();
      }}
    >
      <DropShadow style={styles.itemContainer}>
        <Image
          width={dimensions()._width * 0.42}
          height={dimensions()._width * 0.7}
          style={{ resizeMode: "stretch", borderRadius: 12 }}
          source={{
            uri:
              props.item.images === undefined || props.item.images.length === 0
                ? emptyImageUrl
                : "https:" + props.item.images[0].originalUrl,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setIsFavorite(!isFavorise);
          }}
          style={{ position: "absolute", top: 8, right: 8 }}
        >
          <LikeIcon color={isFavorise ? Colors.red : undefined}></LikeIcon>
        </TouchableOpacity>
        <DropShadow
          style={[styles.giftContainer, { opacity: props.item.hasGift }]}
        >
          <AppText style={styles.giftText}>HEDIYELI</AppText>
        </DropShadow>
        <View
          style={{
            paddingHorizontal: 16,
            flex: 1,
            justifyContent: "space-evenly",
          }}
        >
          <AppText style={styles.productTitle}>{props.item.name}</AppText>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AppText
              style={
                props.item.discount === 0
                  ? styles.priceStyle
                  : styles.discontedPriceStyle
              }
            >
              {props.item.price1}
            </AppText>
            <AppText
              style={[
                styles.discountStyle,
                { opacity: props.item.discount === 0 ? 0 : 1 },
              ]}
            >
              {props.item.discount}
            </AppText>
          </View>
          {props.item.categories.length == 0 ? (
            <View></View>
          ) : (
            <AppText>
              <AppText>Category: </AppText>
              <AppText>{props.item.categories[0].name}</AppText>
            </AppText>
          )}
        </View>
      </DropShadow>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 12,
    marginLeft: 16,
    width: dimensions()._width * 0.42,
    height: dimensions()._width * 0.92,
    justifyContent: "flex-start",
    backgroundColor: Colors.white,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    margin: 6,
  },
  giftContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: Colors.white,
    opacity: 0.9,
    borderRadius: 8,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  giftText: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.black,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.black,
  },
  priceStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.black,
  },
  discontedPriceStyle: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  discountStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.green,
    marginLeft: 6,
  },
});
