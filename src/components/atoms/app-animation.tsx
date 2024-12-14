import dimensions from "@/src/utils/helpers/dimensions";
import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";

interface AnimationProps {
  animation: any;
  duration?: number;
  height?: number;
  width?: number;
}

const AppAnimation: React.FC<AnimationProps> = ({
  animation,
  duration,
  height,
  width,
}) => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    // animationRef.current?.play();
    // // Or set a specific startFrame and endFrame with:
    // animationRef.current?.play(30, 120);
  }, []);

  return (
    <LottieView
      autoPlay
      ref={animationRef}
      source={animation}
      style={{
        width: width ?? dimensions()._width * 0.4,
        height: height ?? dimensions()._width * 0.4,
      }}
    ></LottieView>
  );
};

export default AppAnimation;
