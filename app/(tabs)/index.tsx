import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { CategoryType, ProductType } from "@/types/type";
// import axios from "axios";
import data from "@/data/db.json";
import Header from "@/component/Header";
import { Stack } from "expo-router";
import ProductList from "@/component/ProductList";
import Categories from "@/component/Categories";
import FlashSales from "@/component/FlashSales";

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>(data.products);
  const [categories, setCategories] = useState<CategoryType[]>(data.categories);
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
      <Categories categories={categories} />
      <FlashSales />
      <ProductList products={products} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
