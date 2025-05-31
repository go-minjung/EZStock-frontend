import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OrderDoneScreen() {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push("/orderSummary")}
    >
      <View style={styles.content}>
        <Ionicons name="checkmark-outline" size={64} color="white" />
        <Text style={styles.text}>발주 완료!</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="홈으로 이동"
          variant="white"
          onPress={() => router.push("/")}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A99AB",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 150,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 16,
  },
  buttonWrapper: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});
