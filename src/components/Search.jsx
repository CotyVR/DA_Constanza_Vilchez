import { StyleSheet, TextInput } from "react-native";
import {colors} from '../global/colors'

const Search = ({setSearch}) => {
    return (
      <TextInput
        placeholder="¿Qué planta buscas?"
        onChangeText={(text)=>setSearch(text)}
        style={styles.searchInput}
      />
    )
}

export default Search

const styles = StyleSheet.create({
    searchInput:{
        margin:5,
        borderWidth:1,
        borderColor: colors.azulCobalto,
        padding:5,
        paddingLeft:5
    }
})