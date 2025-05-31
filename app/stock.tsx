import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconSearch from '../components/ui/IconSearch';

export default function StockScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 헤더 */}
      <Text style={styles.header}>Stock</Text>

      {/* 검색창 */}
      <View style={styles.searchContainer}>
        <IconSearch />
      </View>

      {/* 오늘 요약 */}
      <Image source={require("../assets/images/stock.png")} style={styles.stockImage} />

      {/* 재고 현황 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>재고 현황 <Text style={styles.sectionSub}>Delivery address</Text></Text>
        <Image source={require('../assets/images/graph1.png')} style={styles.graphImage} resizeMode="contain" />
      </View>

      {/* 입/출고 현황 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>입/출고 현황 <Text style={styles.sectionSub}>Delivery address</Text></Text>
        <Image source={require('../assets/images/graph2.png')} style={styles.graphImage} resizeMode="contain" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  searchContainer: {
    marginBottom: 5,
  },
  summaryBox: {
    backgroundColor: '#7AA0AA',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  summaryDate: {
    color: 'white',
    fontSize: 14,
    marginBottom: 12,
  },
  summaryNumbers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryLabel: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  sectionSub: {
    fontSize: 12,
    color: '#999',
  },
  stockImage: {
  width: 750, 
  height: 120,
  resizeMode: 'contain',
  borderRadius: 12,
  marginBottom: 24,
  alignSelf: 'center', 
},
  graphImage: {
    width: '200%',
    height: 180,
    marginHorizontal: -30,
    alignSelf: 'center',
  },
});
