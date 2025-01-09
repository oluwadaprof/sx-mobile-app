import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductType } from "@/types/type";
import axios from "axios";

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const URL = "http://localhost:8000/products";
    const res = await axios.get(URL);

    console.log(res.data);
    setProducts(res.data);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text>Home Screens</Text>
      {/* <View>
        {products.map((item, index) => (
          <Text style={{ color: "black" }} key={index}>
            {item.title}
          </Text>
        ))}
      </View> */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => (
          <Text>
            {item.title}
          </Text>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
