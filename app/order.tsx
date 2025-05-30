/*import { Text, View } from "react-native";

export default function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>발주 관리 페이지</Text>
    </View>
  );
}*/

/*import { Text, View } from "react-native";

export default function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>발주 관리 페이지</Text>
    </View>
  );
}*/

// app/order.tsx

// app/order.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function OrderScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const productList = [
    { id: 1, image: require('../assets/images/product1.png') },
    { id: 2, image: require('../assets/images/product2.png') },
    { id: 3, image: require('../assets/images/product3.png') },
    { id: 4, image: require('../assets/images/product4.png') },
    { id: 5, image: require('../assets/images/product5.png') },
  ];

  const filtered = productList.filter((item) =>
    search === '' || item.image.toString().toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order</Text>

      <TextInput
        style={styles.search}
        placeholder="제품을 검색하세요."
        value={search}
        onChangeText={setSearch}
      />

      <Text style={styles.subtitle}>재고 내역</Text>

      <ScrollView style={styles.scrollArea}>
        {filtered.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => router.push('/orderDone')}
            style={styles.cardWrapper}
          >
            <Image source={product.image} style={styles.cardImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => router.push('/orderDone')} style={styles.buttonImageWrapper}>
        <Image
          source={require('../assets/images/button_start_balju.png')}
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 4 },
  search: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  subtitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  scrollArea: { flex: 1 },
  cardWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  cardImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  buttonImageWrapper: {
    alignItems: 'center',
    marginTop: 12,
  },
  buttonImage: {
    width: 300,
    height: 60,
    resizeMode: 'contain',
  },
});
