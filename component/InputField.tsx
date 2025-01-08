import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";

type Props = {};

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return <TextInput {...props} style={styles.inputField} />;
};

export default InputField;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    borderRadius: 5,
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
  },
});
