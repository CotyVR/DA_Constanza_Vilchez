import {StyleSheet, Text, View, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../global/colors'
import products from '../data/products.json'
import {useEffect, useState} from 'react'

const ProductScreen = ({ route, navigation }) => {
    const [productFound, setProductFound] = useState({})

    const productId = route.params

    useEffect(() =>{
        setProductFound(products.find(product=>product.id===productId))
    },[productId])

    return(
        <View>
            <Pressable onPress={()=>navigation.goBack()}><Icon style={styles.goBack} name="arrow-back" size={30}/></Pressable>
            <Text>{productFound.title}</Text>
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    goBack:{
        padding:10,
        color:colors.azulCobalto
    }
})