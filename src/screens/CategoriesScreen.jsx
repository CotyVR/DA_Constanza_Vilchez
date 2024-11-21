import { StyleSheet, Text, View, FlatList, Image, Pressable, useWindowDimensions, ActivityIndicator } from "react-native";

import FlatCard from "../components/FlatCard";
import {useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../features/shop/shopSlice";
import { useGetCategoriesQuery } from "../services/shopService";
import { colors } from "../global/colors";

const CategoriesSreen = ({navigation}) => {

  const {width,height} = useWindowDimensions()
  const [isPortrait,setIsPortrait]=useState(true)

  //const categories = useSelector((state)=>state.shopReducer.value.categories)

  const { data: categories, error, isLoading } = useGetCategoriesQuery()

  const dispatch = useDispatch()

  useEffect(()=>{
    if(width,height){
      setIsPortrait(false)
    }else{
      setIsPortrait(true)
    }
  },
  [width,height])

  const renderCategoryItem = ({ item, index }) => {
    return (
      <Pressable onPress={()=>{

        dispatch(setCategory(item.title)) //esto es el action.payload de "shopSlice.js"
        navigation.navigate('Productos')

      }}>
      <FlatCard
        style={
          //Uso de operador ternario condicion?si verdadero:si falso --> Permite ver si algo es par o no --> Me permite alternar las direcciones de las imagenes con los titulos (se encuentra vinculado al final -- const -- row -- rowReverse)
          index % 2 == 0
            ? { ...styles.categoryItemContainer, ...styles.row }
            : { ...styles.categoryItemContainer, ...styles.rowReverse }
        }
      >
        {/* Lo que esta dentro, es el children del FlatCard */}
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          /* Determina como se dimensiona la imagen cuando el contenedor no coincide con ella. */
          resizeMode="contain"
        />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </FlatCard>
      </Pressable>
    );
  };

  return (
    <>
      {
        isLoading
        ?
        <ActivityIndicator size="large" color={colors.azulCobalto}/>
        :
        error
        ?
        <Text>Error al cargar las categorias</Text>
        :
        <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
         />
      }
    
    </>
  );
};

export default CategoriesSreen;

const styles = StyleSheet.create({
  categoryItemContainer: {
    justifyContent: "sapace-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  },
  image: {
    width: 150,
    height: 100,
  },
  row: {
    flexDirection: "row",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
});


