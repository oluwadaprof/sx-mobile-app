import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {};

const Header = (props: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.logo}>{`N><S`}</Text>
      <Link href={"/explore"} asChild>
        <TouchableOpacity style={styles.searchBar}>
          <Text style={styles.searchText}>Search</Text>
          <Ionicons name="search-outline" size={20} color={COLORS.gray} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 15,
  },
  logo: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },
  searchBar: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchText: {
    color: COLORS.gray,
  },
});
