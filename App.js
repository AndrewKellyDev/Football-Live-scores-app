import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";

import Navigation from "./src/navigation";
import { theme } from "./src/config/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar hidden={true} />
      <Navigation />
    </NativeBaseProvider>
  );
}
