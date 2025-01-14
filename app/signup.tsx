import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";
import InputField from "@/component/InputField";
import SocialLoginButtons from "@/component/SocialLoginButtons";

type Props = {};

const SignUpScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Sign Up",
          headerLeft: () => (
            <TouchableOpacity
              style={{ flex: 0.8 }}
              onPress={() => router.back()}
            >
              <Ionicons name="close" size={24} color={COLORS.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={COLORS.gray}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={true}
        />
        <InputField
          placeholder="Confirm Password"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Create An Account</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Link href={"/signin"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTextSpan}>SignIn</Text>
            </TouchableOpacity>
          </Link>
        </Text>

        <View style={styles.divider} />

        <SocialLoginButtons emailHref={'/signin'} />
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: COLORS.black,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginText: {
    marginBottom: 30,
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 24,
  },
  loginTextSpan: {
    color: COLORS.primary,
    fontWeight: "600",
    marginTop: 10,
    height: 20
  },
  divider: {
    borderTopColor: COLORS.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom: 30
  }
});
