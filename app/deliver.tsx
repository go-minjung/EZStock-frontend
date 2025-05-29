import Button from "@/components/Button";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DeliverScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} />
        <Text style={styles.headerTitle}>Delivery</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for spacing */}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* 제품 정보 */}
        <Text style={styles.sectionTitle}>
          제품 정보 <Text style={styles.sub}>Product Information</Text>
        </Text>
        <View style={styles.imageCard}>
          <Image
            source={require("../assets/images/product1.png")}
            style={styles.productImage}
            resizeMode="contain"
          />
        </View>

        {/* 출고처 정보 */}
        <Text style={styles.sectionTitle}>
          출고처 <Text style={styles.sub}>Delivery address</Text>
        </Text>
        <View style={[styles.card, { marginBottom: 20 }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bold}>경북대학교 IT5호관</Text>
            <Text style={styles.gray}>
              대구광역시 북구 대학로 80 IT관 317호 (전화번호 415)
            </Text>
            <Text style={styles.gray}>Tel) 053-950-5550</Text>
          </View>
          <Ionicons name="map-outline" size={24} color="#aaa" />
        </View>

        {/* 날짜 & 출고번호 */}
        <Text style={styles.date}>25.06.01</Text>
        <Text style={[styles.gray, { marginBottom: 20 }]}>
          출고번호 2025060100054410001
        </Text>

        {/* 출고자 정보 */}
        <Text style={styles.sectionTitle}>출고자 정보</Text>
        <View style={styles.infoBox}>
          <InfoItem label="임시용" value="010-6535-7898" />
          <InfoItem label="자동차 택배사" value="CJ 대한통운" />
          <InfoItem
            label="반송지 주소"
            value="경기 부천시 송내대로518번길 94"
          />
        </View>

        {/* 결제 정보 */}
        <Text style={styles.sectionTitle}>결제 정보</Text>
        <View style={styles.infoBox}>
          <InfoItem label="상품 금액" value="108,000" />
          <InfoItem label="배송비" value="3,500" />
          <InfoItem label="결제 금액" value="111,500" bold />
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.buttonWrapper}>
        <Button
          title="출고하기"
          variant="blue"
          onPress={() => router.push("/orderDone")}
        />
      </View>
    </View>
  );
}

function InfoItem({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.gray}>{label}</Text>
      <Text style={[styles.infoValue, bold && { fontWeight: "bold" }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7F7F7" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
  },
  sub: {
    fontWeight: "normal",
    color: "#888",
    fontSize: 12,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    height: 100,
  },
  imageCard: {
    backgroundColor: "#fff",
    width: "100%",
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  productImage: {
    width: "95%",
    height: "95%",
    marginLeft: 25,
  },
  bold: { fontWeight: "bold", marginBottom: 4 },
  gray: { color: "#666", fontSize: 13 },
  date: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  infoBox: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  infoValue: {
    fontSize: 14,
    color: "#000",
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#f9f9f9",
  },
});
