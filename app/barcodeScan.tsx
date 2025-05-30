import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraReady, setCameraReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!permission) {
      requestPermission();
    }
  }, []);

  useEffect(() => {
    if (cameraReady) {
      const timer = setTimeout(() => {
        router.replace("/deliver"); // 화면 이동
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cameraReady]);

  if (!permission) {
    return <Text>카메라 권한 확인 중...</Text>;
  }

  if (!permission.granted) {
    return <Text>카메라 권한이 필요합니다.</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        onCameraReady={() => setCameraReady(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
