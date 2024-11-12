import { StatusBar } from 'expo-status-bar';
import CategoriesSreen from './src/screens/CategoriesScreen';
import Header from './src/components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <CategoriesSreen/>
      <StatusBar style="light" />
    </>
  );
}

