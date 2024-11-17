import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const FlatCard =({children,style}) => {
    return(
        /* El codigo de abajo me permite colocar mas estilos. El children y el style y styles. Se juntan los estilos */
        <View style={{...styles.cardContainer,...style}}>
            {children}
        </View>
    )
}

export default FlatCard

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: colors.verdeMuyClaro,
        shadowColor: colors.azulCobalto,
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: {width: 3, height:5},
        elevation:10,
    }
})