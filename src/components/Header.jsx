import { StyleSheet, Text, View } from "react-native";
/* Mi paleta de colores */
import {colors} from "../global/colors"

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text stylele={styles.title}>Mundo Geek</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        /* Forma en que se usa la paleta de colores */
        backgroundColor:colors.azulCobalto
    },
    title:{
        fondSize: 16,
        frontWeight: "bold",
        color:colors.verde
    }
})