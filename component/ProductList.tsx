import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { ProductType } from "@/types/type";
import { COLORS } from "@/constants/Colors";

type Props = {
  products: ProductType[];
};

const ProductList = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For you 🫵</Text>
        <TouchableOpacity>
          <Text style={styles.titleButton}>See all 📃</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <ProductItem index={index} item={item} />
        )}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: COLORS.black,
  },
  titleButton: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: COLORS.black,
  },
});
