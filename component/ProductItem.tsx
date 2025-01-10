import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ProductType } from "@/types/type";

type Props = {
  item: ProductType;
};

const ProductItem = ({ item }: Props) => {
  return (
    <View>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <Text style={{ fontSize: 16, color: "black" }}>{item.title}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
});
