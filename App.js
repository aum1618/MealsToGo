import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import styled from "styled-components";
import { initializeApp } from "firebase/app";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyA3zM0lSdaQOB0xtdhMN9pKqZ9Kaq8f6vM",
  authDomain: "mealstogo-f1152.firebaseapp.com",
  projectId: "mealstogo-f1152",
  storageBucket: "mealstogo-f1152.appspot.com",
  messagingSenderId: "545340124516",
  appId: "1:545340124516:web:4380b5da009d3090a79e71",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
