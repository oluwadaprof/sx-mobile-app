import { Text, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { icon } from "@/constants/Icons";

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, label, routeName } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarBtn}
    >
      {/* Cart bag box */}
      {routeName === "cart" && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}
      {icon[routeName as keyof typeof icon]({
        color: isFocused ? COLORS.primary : COLORS.black,
      })}
      <Text style={{ color: isFocused ? COLORS.primary : COLORS.black }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarBtn: {
    width: "auto",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  badgeWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.highlight,
    top: -6,
    right: 17,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10
  },
  badgeText: {
    color: COLORS.black,
    fontSize: 12
  }
});
