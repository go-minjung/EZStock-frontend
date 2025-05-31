import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/Button";
import IconSearch from "../components/ui/IconSearch";

export default function ManageScreen() {
  const router = useRouter(); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 헤더 */}
      <Text style={styles.header}>Stock</Text>

      {/* 검색창 */}
      <View style={styles.search}>
        <IconSearch />
      </View>

      {/* 오늘 요약 이미지 */}
      <Image
        source={require("../assets/images/stock.png")}
        style={styles.stockImage}
      />

      {/* 등록/수정 버튼 이미지 */}
      <Image
        source={require("../assets/images/register_edit.png")}
        style={styles.registerEditImage}
      />

      {/* 발주 요청 */}
      <Text style={styles.sectionTitle}>
        발주 요청 <Text style={styles.sectionSub}>Delivery address</Text>
      </Text>

      {/* process 이미지 */}
      <Image
        source={require("../assets/images/process.png")}
        style={styles.graphImage}
        resizeMode="contain"
      />

      {/* 제품 이미지 */}
      <Image
        source={require("../assets/images/product6.png")}
        style={[styles.productImage, { marginBottom: 0 }]}
        resizeMode="contain"
      />

      {/* AI 버튼 */}
      <CustomButton
        title="AI Manager 이용하기"
        onPress={() => router.push("/ai")} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#F8F8F8",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  search: {
    marginBottom: 3,
  },
  stockImage: {
    width: 750,
    height: 120,
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 12,
    alignSelf: "center",
  },
  registerEditImage: {
    width: "100%",
    height: 80,
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 4,
  },
  sectionSub: {
    fontSize: 12,
    color: "#999",
  },
  graphImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 0,
  },
  productImage: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 0,
  },
});
