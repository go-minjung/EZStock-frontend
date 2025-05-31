import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function OrderDoneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="checkmark-outline" size={64} color="white" />
        <Text style={styles.text}>출고 완료!</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="홈으로 이동"
          variant="white"
          onPress={() => router.push("/")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A99AB",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 100,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 16,
  },
  buttonWrapper: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});
