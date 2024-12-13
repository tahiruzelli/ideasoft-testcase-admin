import { Colors } from "@/src/utils/constans/colors";
import { PageRoutes } from "@/src/utils/constans/page-routes";
import { setToken } from "@/src/utils/helpers/token";
import { router } from "expo-router";
import { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  useAnimatedValue,
} from "react-native";

export default function SplashOrganism() {
  const fadeAnim = useAnimatedValue(0);

  const animationDuration = 3000;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    setToken("AX5FTZ7UBAABUDT6XYYPW7LX");
    fadeIn();
    setTimeout(() => {
      router.replace(PageRoutes.home);
    }, animationDuration);
  }, []);
  return (
    <View style={styles.body}>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Image source={require("../../../../assets/images/logo.png")} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
