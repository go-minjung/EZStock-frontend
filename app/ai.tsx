import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

type Message = {
  role: "user" | "ai";
  text: string;
  timestamp: string;
};

export default function AIScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "무엇을 도와드릴까요? 아래 버튼을 눌러보세요.",
      timestamp: getCurrentTime(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const quickActionLabels = [
    "📦 재고 부족 상품 확인",
    "🗓️ 오늘 발주할 상품 보기",
    "🍑 유통기한 임박 상품",
    "📊 매출 요약 보고",
    "💰 미수금 정산 요청",
    "🛠️ 자주 묻는 질문 관리",
  ];

  function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  const handleUserMessage = (text: string) => {
    const time = getCurrentTime();

    setMessages((prev) => [
      ...prev,
      { role: "user", text, timestamp: time },
      { role: "ai", text: getAIResponse(text), timestamp: time },
    ]);
    setInputText("");
  };

  const getAIResponse = (text: string) => {
    switch (text) {
      case "📦 재고 부족 상품 확인":
        return "현재 재고가 부족한 상품:\n• 생물 참소라 (재고 4)\n• 스트로베리 셔벗 (재고 7)\n• 미니 칼슘 (재고 9)\n→ 빠른 추가 발주가 필요합니다.";
      case "🗓️ 오늘 발주할 상품 보기":
        return "오늘 자정까지 발주해야 할 상품:\n• 곤약 젤리\n• 청포도 탄산수\n• 로즈마리 훈제 닭가슴살";
      case "🍑 유통기한 임박 상품":
        return "곧 유통기한이 도래하는 상품:\n• 복숭아 요거트 - 3일 남음\n• 프레시 우유 - 5일 남음\n• 두유팩 - 6일 남음";
      case "📊 매출 요약 보고":
        return "📈 오늘 매출 요약:\n• 총 매출: 522,300원\n• 판매 건수: 41건\n• 인기 상품: 제주감귤 에이드";
      case "💰 미수금 정산 요청":
        return "💸 미수금 현황:\n• 하나마트: 1,200,000원\n• 마이상점: 550,000원\n→ 정산 요청서를 발송할까요?";
      case "🛠️ 자주 묻는 질문 관리":
        return "FAQ 설정은 곧 제공될 예정입니다. 원하는 질문을 입력해 주세요.";
      default:
        return "죄송합니다. 해당 요청은 현재 지원되지 않습니다. 더 많은 기능이 곧 추가될 예정입니다.";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Manager</Text>

      {/* 빠른 응답 버튼 */}
      <View style={styles.quickButtons}>
        {quickActionLabels.map((label) => (
          <TouchableOpacity
            key={label}
            style={styles.quickButton}
            onPress={() => handleUserMessage(label)}
          >
            <Text style={styles.quickButtonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 채팅창 */}
      <ScrollView style={styles.chatContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.chatBubble,
              msg.role === "user" ? styles.userBubble : styles.aiBubble,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
            <Text style={styles.timestampText}>{msg.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      {/* 입력창 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="메시지를 입력하세요."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity
          onPress={() => inputText.trim() && handleUserMessage(inputText)}
          style={styles.sendButton}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 스타일
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  quickButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
  },
  quickButton: {
    backgroundColor: "#EAF4FF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 30,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 6,
  },
  quickButtonText: {
    color: "#2A65D0",
    fontWeight: "600",
    fontSize: 14,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  chatBubble: {
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
    maxWidth: "80%",
  },
  userBubble: {
    backgroundColor: "#90C2E7",
    alignSelf: "flex-end",
  },
  aiBubble: {
    backgroundColor: "#F1F1F1",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 14,
  },
  timestampText: {
    fontSize: 10,
    color: "#888",
    marginTop: 4,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: "#2A65D0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
});
