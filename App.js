import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { StatusBar } from "expo-status-bar";
import CategoriesSreen from "./src/screens/CategoriesScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import Header from "./src/components/Header";
import { useEffect, useState } from "react"

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Inter': require('./assets/fonts/Inter-Variable.ttf'),
    'Satisfy': require('./assets/fonts/Satisfy-Static.ttf')
  });

  const[category, setCategory] = useState("")

  useEffect(()=>{
    if(loaded || error){
      SplashScreen.hideAsync();
    }
  },[loaded, error]);

  if(!loaded && !error){
    return null;
  }

  return (
    <>
      <Header />
      {
        category
        ?
        <ProductsScreen category={category} setCategory={setCategory}/>
        :
        <CategoriesSreen setCategory={setCategory}/>
      }
      <StatusBar style="light" />
    </>
  );
}
