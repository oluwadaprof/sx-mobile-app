import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ProductType } from "@/types/type";
// import axios from "axios";

import Header from "@/component/Header";
import { Stack } from "expo-router";
import data from "@/data/db.json";
import ProductItem from "@/component/ProductItem";
import { COLORS } from "@/constants/Colors";

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>(data.products);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // const getProduct = async () => {
  //   const URL = "http://localhost:8000/products";
  //   const response = await axios.get(URL);

  //   console.log(response.data);
  //   setProducts(response.data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
          statusBarStyle: "light",
        }}
      />
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
    </>
  );
};

export default HomeScreen;

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
