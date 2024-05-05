import React, { useState, useEffect } from "react";
import { AppState, StyleSheet, Text, View } from "react-native";

const Home = () => {
  const [appState, setAppState] = useState("active");

  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      setAppState(nextAppState);
    };

    // Add event listener for app state changes
    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      // Clean up event listener
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);

  // Function to get background color based on app state
  const getBackgroundColor = () => {
    switch (appState) {
      case "active":
        return "#00FF00"; // Green when app is active
      case "background":
        return "#FFA500"; // Orange when app is in background
      case "inactive":
        return "#FFFF00"; // Yellow when app is inactive
      case "paused":
        return "#FF0000"; // Red when app is paused
      case "stopped":
        return "#0000FF"; // Blue when app is stopped
      default:
        return "#FFFFFF"; // White for unknown state
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.text}>Current App State: {appState}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Home;
