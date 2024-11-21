import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  Image,
  FlatList,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../global/colors";
import products from "../data/products.json";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";


const ProductScreen = ({ route, navigation }) => {
  const [productFound, setProductFound] = useState({});

  const productId = route.params;

  const { width, height } = useWindowDimensions;

  useEffect(() => {
    setProductFound(products.find((product) => product.id === productId));
  }, [productId]);

  const dispatch = useDispatch()

  return (
    <ScrollView style={styles.productContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon style={styles.goBack} name="arrow-back" size={30} />
      </Pressable>
      <Text style={styles.textBrand}>{productFound.brand}</Text>
      <Text style={styles.textTitle}>{productFound.title}</Text>
      <Image
        source={{ uri: productFound.mainImage }}
        alt={productFound.title}
        width='100%'
        height='300'
        resizeMode="contain"
      />
      <Text style={styles.longDescription}>{productFound.longDescription}</Text>
      
      <View style={styles.tagsContainer}>
        <View style={styles.tags}>
        <Text style={styles.tagText}>Tags: </Text>
        {
          productFound.tags?.map(tag=><Text key={Math.random()} style={styles.tagText}>{tag}</Text>)
        }
        </View>

        {productFound.discount > 0 && (
          <View style={styles.discount}>
            <Text style={styles.discountText}>
              Descuento {productFound.discount} %
            </Text>
          </View>
        )}
      </View>
      {productFound.stock <= 0 && (
        <Text style={styles.noStockText}>Sin Stock</Text>
      )}
      <Text style={styles.price}>Precio: $ {productFound.price}</Text>
      <Pressable 
        style={({ pressed }) => [{ opacity: pressed ? 0.55 : 1}, styles.addToCartButton]} 
        onPress={()=>dispatch(addItem({...productFound, quantity:1}))}>
        <Text style={styles.textAddToCart}>Agregar al carrito</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  goBack: {
    padding: 10,
    color: colors.azulCobalto,
  },
  productContainer: {
    paddingHorizontal: 20,
  },
  textBrand: {
    color: colors.azulCobalto,
  },
  textTitle: {
    fontSize: 30,
    fontWeight: "700",
    paddingVertical: 8,
  },
  longDescription: {
    fontFamily: 'Satisfy',
    fontSize: 20,
    textAlign: "justify",
    paddingVertical: 8,
  },
  tagsContainer:{
    flexDirection: "row",
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tags: {
    flexDirection: "row",
    gap: 5,
  },
  tagText: {
    fontWeight: "600",
    fontSize: 12,
    color: colors.azulCobalto,
  },
  price: {
    fontWeight: "800",
    fontSize: 18,
  },
  discount: {
    backgroundColor: colors.azulCobalto,
    padding: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  discountText: {
    color: colors.blanco,
  },
  noStockText: {
    color: "red",
  },
  price:{
    fontSize:32,
    fontWeight: '700',
    alignSelf: 'center',
    paddingVertical: 8,
  },
  addToCartButton:{
    padding: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.verdeOscuro,
    borderRadius: 16,
    marginVertical: 20
  },
  textAddToCart:{
    color: colors.blanco,
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 1
  }
});
