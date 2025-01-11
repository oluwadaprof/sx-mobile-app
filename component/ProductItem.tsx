import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ProductType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  item: ProductType;
  index: number
};

const width = Dimensions.get("window").width - 40;

const ProductItem = ({ item ,index }: Props) => {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.delay(300 + index * 200).duration(500)}
    >
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <TouchableOpacity style={styles.bookmarkButton}>
        <Ionicons name="heart-outline" size={22} color={COLORS.black} />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingWrapper}>
          <Ionicons name="star" size={20} color={"#D4AF37"} />
          <Text style={styles.rating}>4.7</Text>
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Animated.View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkButton: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.black,
    letterSpacing: 1.5,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.primary,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    fontSize: 14,
    color: COLORS.gray,
  },
});
