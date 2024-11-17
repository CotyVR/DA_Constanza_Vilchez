import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
/* No es necesario colocar las llaves, debido a que exportamos el archivo entero --> en "categories" */
import categories from "../data/categories.json";
import FlatCard from "../components/FlatCard";

const CategoriesSreen = ({setCategory}) => {
  const renderCategoryItem = ({ item, index }) => {
    return (
      <Pressable onPress={()=>setCategory(item.title)}>
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
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
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
