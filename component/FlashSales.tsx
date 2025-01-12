import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function FlashSales() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.timerWrapper}>
          <Text style={styles.title}>Flash Sales 🌟</Text>
          <View style={styles.timer}>
            <Ionicons name="time-outline" size={16} color={COLORS.black} />
            <Text style={styles.timerText}>00:00:00:00</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.titleButton}>See all 📃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
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
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
  },
  item: {
    marginVertical: 10,
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timer: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 5,
    backgroundColor: COLORS.highlight,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
  },
  timerText: {
    color: COLORS.black,
    fontWeight: "500",
  },
});
