import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ProductType } from "@/types/type";
// import axios from "axios";

import Header from "@/component/Header";
import { Stack } from "expo-router";
import data from "@/data/db.json";
import ProductItem from "@/component/ProductItem";

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
        <Text>Home Screens</Text>
        <FlatList
          data={products} 
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => (
            <ProductItem item={item} />
          )}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  }

});
