import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type ButtonProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: "white" | "blue"; // 기본은 blue
};

export default function CustomButton({
  title,
  onPress,
  variant = "blue",
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "white" ? styles.white : styles.blue]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          variant === "white" ? styles.blueText : styles.whiteText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 46,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  blue: {
    backgroundColor: "#5A99AB",
  },
  white: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#5A99AB",
  },
  text: {
    fontWeight: "600",
    fontSize: 18,
  },
  whiteText: {
    color: "#ffffff",
  },
  blueText: {
    color: "#5A99AB",
  },
});
