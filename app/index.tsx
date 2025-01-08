import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/constants/Colors";

import Animated, { FadeInRight } from "react-native-reanimated";
import SocialLoginButtons from "@/component/SocialLoginButtons";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require("@/assets/images/ecommerce-splash.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(255, 255, 255, .9)",
              "rgba(255, 255, 255, 1)",
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              {/* Logo */}
              <Animated.Text
                style={styles.title}
                entering={FadeInRight.delay(300).duration(300).springify()}
              >{`NO><US`}</Animated.Text>

              {/* Subtitle */}
              <Animated.Text
                style={styles.description}
                entering={FadeInRight.delay(500).duration(300)}
              >
                One Stop Solution for All Your Needs.
              </Animated.Text>

             <SocialLoginButtons emailHref={"/signup"}/>

              <Text style={styles.loginText}>
                Already have an account?{" "}
                <Link href={"/signin"} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTextSpan}>SignIn</Text>
                  </TouchableOpacity>
                </Link>
              </Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: "900",
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: COLORS.gray,
    letterSpacing: 1,
    lineHeight: 30,
    marginBottom: 20,
  },
  loginText: {
    marginTop: 30,
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 24,
  },
  loginTextSpan: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});
