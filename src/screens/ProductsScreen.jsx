import { FlatList, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from "react-native";
import products from "../data/products.json"
import FlatCard from "../components/FlatCard";
import { colors } from '../global/colors'
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Search from "../components/Search";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";

const ProductsScreen = ({ navigation, route }) => {
    const [productsFiltered, setProductsFiltered] = useState([])
    const [search,setSearch] = useState("")

    //const productsFilteredByCategory = useSelector(state=>state.shopReducer.value.productsFilteredByCategory)

    const category = useSelector(state =>state.shopReducer.value.categorySelected)

    const {data: productsFilteredByCategory, error, isLoading} = useGetProductsByCategoryQuery(category)

    
    useEffect(()=>{
        setProductsFiltered(productsFilteredByCategory)
       if(search){
            const productsTempSearched = productsFilteredByCategory.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
            setProductsFiltered(productsTempSearched)
        }
    },[search])

    const renderProductItem = ({item})=>{
        return(
            <Pressable onPress={() => navigation.navigate("Producto", item.id)}>
            <FlatCard style={styles.productsContainer}>
                <View>
                    <Image
                        source={{uri:item.mainImage}}
                        style={styles.productImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.productDescription}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.shortDescription}>{item.shortDescription}</Text>
                <View style={styles.tags}>
                    <Text style={styles.tagText}>Tags: </Text>
                    {
                        <FlatList
                         style={styles.tags}
                         data={item.tags}
                         keyExtractor={()=>Math.random()}
                        renderItem={({item})=><Text style={styles.tagText}>{item}</Text>}
                        />
                    }
                    </View>
                    {
                         item.discount > 0 && <View style={styles.discount}><Text style={styles.discountText}>Descuento {item.discount} %</Text></View>
                    }
                    {
                            item.stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>
                        }
                        <Text style={styles.price}>Precio: $ {item.price}</Text>
                </View>
            </FlatCard>
            </Pressable>
        )
    }
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
            <>

            <Pressable onPress={()=>navigation.goBack()}><Icon style={styles.goBack} name="arrow-back" size={30}/></Pressable>
            <Search setSearch={setSearch}/>
            <FlatList    
             data={productsFiltered}
            keyExtractor={item=>item.id}
            renderItem={renderProductItem}
            />

            </>
        }
     
        </>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    productsContainer: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: "flex-start",
        margin: 10,
        alignItems: "center",
        gap: 2
    },
    productImage: {
        width: 100,
        height: 100
    },
    productDescription: {
        width: "80%",
        padding: 20,
        gap: 5
    },
    productTitle: {
        fontFamily: 'Inter',
        fontWeight: '800',
        fontSize: 17
    },
    shortDescription: {
        fontFamily: 'Satisfy'
    },
    tags: {
        flexDirection: 'row',
        gap: 5
    },
    tagText: {
        fontWeight: '600',
        fontSize: 12,
        color: colors.azulCobalto
    },
    price: {
        fontWeight: '800',
        fontSize: 18
    },
    discount: {
        backgroundColor: colors.azulCobalto,
        padding: 8,
        borderRadius: 12,
        alignSelf: 'flex-start'
    },
    discountText: {
        color: colors.blanco
    },
    noStockText: {
        color: 'red'
    },
    goBack:{
        padding:10,
        color:colors.azulCobalto
    }
})