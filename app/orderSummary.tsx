// app/OrderSummary.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function OrderSummaryScreen() {
  const { id } = useLocalSearchParams();

  const imageMap: { [key: string]: any } = {
    '1': require('../assets/images/baluju_check1.png'),
    '2': require('../assets/images/baluju_check2.png'),
    '3': require('../assets/images/baluju_check3.png'),
    '4': require('../assets/images/baluju_check4.png'),
    '5': require('../assets/images/baluju_check5.png'),
  };

  const selectedImage = imageMap[id as string] || null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order</Text>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>
          제품 정보 <Text style={styles.sub}>Product Information</Text>
        </Text>
        {selectedImage && (
          <View style={styles.card}>
            <Image source={selectedImage} style={styles.cardImage} resizeMode="contain" />
          </View>
        )}

        {/* 날짜 및 발주번호 */}
        <Text style={styles.date}>25.06.01</Text>
        <Text style={[styles.gray, { marginBottom: 20 }]}>발주번호 2025060100054410001</Text>

        {/* 발주 정보 */}
        <Text style={styles.sectionTitle}>발주 정보</Text>
        <View style={styles.infoBox}>
          <InfoItem label="원세율" value="010-6535-7898" />
          <InfoItem label="자동차 택배사" value="CJ 대한통운" />
          <InfoItem label="반송지 주소" value="경기 부천시 송내대로518번길 94" />
        </View>

        {/* 결제 정보 */}
        <Text style={styles.sectionTitle}>결제 정보</Text>
        <View style={styles.infoBox}>
          <InfoItem label="상품 금액" value="108,000" />
          <InfoItem label="배송비" value="3,500" />
          <InfoItem label="결제 금액" value="111,500" bold />
        </View>
      </ScrollView>
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
      <Text style={[styles.infoValue, bold && { fontWeight: 'bold' }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F7' },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  sub: {
    fontWeight: 'normal',
    fontSize: 12,
    color: '#888',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  gray: { color: '#666', fontSize: 13 },
  infoBox: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  infoValue: {
    fontSize: 14,
    color: '#000',
  },
});
