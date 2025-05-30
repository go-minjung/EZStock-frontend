import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function OrderModal() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // id는 '1' ~ '5' 중 하나의 문자열로 전달됨

  // 제품 번호에 따라 이미지 매핑 (파일명과 경로 반드시 존재해야 함!)
  const imageMap: { [key: string]: any } = {
    '1': require('../assets/images/baluju_check1.png'),
    '2': require('../assets/images/baluju_check2.png'),
    '3': require('../assets/images/baluju_check3.png'),
    '4': require('../assets/images/baluju_check4.png'),
    '5': require('../assets/images/baluju_check5.png'),
  };

  const modalImage = imageMap[id as string] || imageMap['1']; // fallback 설정

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.overlayTouchable} onPress={() => router.back()} />
      <TouchableOpacity onPress={() => router.push('/orderDone')} style={styles.centeredContainer}>
        <Image source={modalImage} style={styles.modalImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // 반투명한 회색 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayTouchable: {
    position: 'absolute',
    width: width,
    height: height,
  },
  centeredContainer: {
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: width * 0.8,
    height: height * 0.55,
    resizeMode: 'contain',
    borderRadius: 16,
  },
});
