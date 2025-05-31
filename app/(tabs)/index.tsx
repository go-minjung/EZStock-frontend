import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
type IconName =
  | "cube-outline"
  | "create-outline"
  | "cart-outline"
  | "chatbox-ellipses-outline";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Ionicons name="menu-outline" size={24} color="#000" />
        <Text style={styles.title}>EZStock</Text>
        <Ionicons name="notifications-outline" size={22} />
      </View>

      {/* 바코드 출고 */}
      <TouchableOpacity
        style={styles.barcodeBox}
        // onPress={() => router.push("/barcodeScan")}
      >
        <Image
          source={require("../../assets/images/barcode.png")}
          style={styles.barcodeImage}
          resizeMode="contain"
        />
        <Text style={styles.barcodeTitle}>바코드 출고</Text>
        <Text style={styles.barcodeSub}>Barcode Delivery</Text>
      </TouchableOpacity>

      {/* 재고 요약 */}
      <Image
        source={require("../../assets/images/stock.png")}
        style={styles.summaryImage}
        resizeMode="contain"
      />

      {/* 기능 버튼들 */}
      <View style={styles.grid}>
        <MenuButton
          title="재고 현황"
          subtitle="Check Stock"
          iconName="cube-outline"
          onPress={() => router.push("/stock")}
        />
        <MenuButton
          title="재고 관리"
          subtitle="Manage Stock"
          iconName="create-outline"
          onPress={() => router.push("/manage")}
        />
        <MenuButton
          title="발주"
          subtitle="Order"
          iconName="cart-outline"
          onPress={() => router.push("/order")}
        />
        <MenuButton
          title="AI 매니저"
          subtitle="AI Manager"
          iconName="chatbox-ellipses-outline"
          onPress={() => router.push("/ai")}
        />
      </View>

      <Text style={styles.footer}>로그아웃</Text>
    </View>
  );
}

function MenuButton({
  title,
  subtitle,
  iconName,
  onPress,
}: {
  title: string;
  subtitle: string;
  iconName: IconName;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Ionicons
        name={iconName}
        size={26}
        color="#383838"
        style={{ marginBottom: 8 }}
      />
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#578CA9" },
  barcodeBox: {
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 10,
  },
  barcodeImage: { width: 200, height: 120 },
  barcodeTitle: { fontWeight: "bold", fontSize: 20 },
  barcodeSub: { fontSize: 14, color: "#666", marginBottom: 15 },
  summaryImage: { width: "100%", height: 150, marginBottom: 10 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
  },
  menuButton: {
    width: "48%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  menuTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 2 },
  menuSubtitle: { fontSize: 12, color: "#666", marginBottom: 2 },
  footer: { textAlign: "center", marginTop: 20, color: "#aaa" },
});
