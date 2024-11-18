import { StyleSheet, Text, View } from "react-native";
/* Mi paleta de colores */
import {colors} from "../global/colors"

const Header = ({subtitle}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Mundo Planta</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
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
        backgroundColor:colors.verdeOscuro
    },
    title:{
        fontSize: 30,
        color:colors.cafeClaro,
        fontFamily: 'Satisfy'
    }
})