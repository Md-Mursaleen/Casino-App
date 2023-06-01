import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { StyleSheet, View } from "react-native";
import RootNavigation from "./src/navigation/RootNavigation";

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
  }, []);
  return (
    <View style={styles.container}>
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
