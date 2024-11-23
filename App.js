import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from "expo-status-bar";

import { useEffect, useState } from "react";

import MainNavigator from "./src/navigation/MainNavigatior";

import { store } from "./src/app/store";
import { Provider } from 'react-redux'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Inter: require("./assets/fonts/Inter-Variable.ttf"),
    Satisfy: require("./assets/fonts/Satisfy-Static.ttf"),
  });


  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator/>
      <StatusBar style="light" />
    </Provider>
  );
}
