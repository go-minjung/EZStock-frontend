import { Search } from "lucide-react-native";
import { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const IconSearch: FC = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="제품을 검색하세요."
        style={styles.input}
        placeholderTextColor="#999"
      />
      <Search size={24} color="#999" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 2,
    paddingRight: 8,
    color: "#333",
  },
});

export default IconSearch;
