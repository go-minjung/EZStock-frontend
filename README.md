# EZStock

실시간 통합 재고관리 어플리케이션

---


## [실행 방법 안내]

EZStock 앱은 Expo 기반의 React Native 앱입니다. 아래 절차에 따라 로컬에서 앱을 실행해볼 수 있습니다.

---

### 📦 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/EZStock-frontend.git
cd EZStock-frontend
```

---


### 📁 2. 의존성 설치

```bash
npm install
```
프로젝트에 필요한 패키지를 모두 설치합니다.

---


### 📁 3. 의존성 설치

```bash
npx expo install expo-camera expo-barcode-scanner
```
카메라 및 바코드 스캔 기능을 위한 Expo 모듈입니다.

---


### ▶️ 4. 앱 실행

```bash
npx expo start
```
실행 후 브라우저에서 QR 코드가 뜹니다.

이 QR 코드를 스마트폰의 Expo Go 앱으로 스캔하여 앱 실행

---


### 📱 5. Expo Go 앱 설치 및 연결

1. Expo Go 앱 설치

📲 iOS용 다운로드 : https://apps.apple.com/us/app/expo-go/id982107779

📲 Android용 다운로드 : https://play.google.com/store/apps/details?id=host.exp.exponent

2. npx expo start 실행 후 나오는 QR 코드 스캔

3. 스마트폰에서 앱 자동 실행

⚠️ PC와 스마트폰은 반드시 같은 Wi-Fi 네트워크에 연결되어 있어야 합니다.

---

### 🛠️ cf) 실행 환경 요약
항목	권장 버전
Node.js	16 이상
npm	8.x 이상
Expo CLI	자동 설치됨 (npx expo)
테스트 기기	Android, iOS (Expo Go 앱 이용)


---

###  🛠️ 참고 사항
1. QR 코드가 인식되지 않으면 LAN 모드로 전환
2. 에뮬레이터 대신 실제 기기 테스트를 권장
3. 기타 오류 발생 시 공식 문서 참조 → Expo Docs: https://docs.expo.dev/
4. 노트북으로 재생할 경우, 바코드 스캐너 기능이 구현되지 않습니다. 꼭 앱으로 실행 부탁드립니다.
5. 바코드 인식 후 실행시간이 최대 30분까지 소요되며, iOS 환경보다는 Android에서 좀 더 빠르게 싱행됩니다.



