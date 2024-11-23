import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../global/colors";
import { useState, useEffect } from "react";
import { useSignupMutation } from "../../services/authService";
import { setUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";



const textInputWidth = Dimensions.get('window').width*0.7

const SignupScreen = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("") 

    const [triggerSignup, result] = useSignupMutation()

    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.status==="rejected"){
  
        }else if (result.status==="fulfilled"){
            dispatch(setUser(result.data))
        }
    }, [result])

    const onsubmit = ()=>{
        triggerSignup({email, password})
    }

  return (
    <LinearGradient
      colors={["#a9e159", "#5ab507"]}
      start={{ x: 0, y: 0 }} // esquina superior izquierda
      end={{ x: 1, y: 1 }} // esquina inferior derecha
      style={styles.gradient}
    >
      <Text style={styles.title}>Mundo Planta</Text>
      <Text style={styles.subTitle}>Registrate</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#EBEBEB"
          placeholder="Email"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#EBEBEB"
          placeholder="Password"
          style={styles.textInput}
          secureTextEntry
        />
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          placeholderTextColor="#EBEBEB"
          placeholder="Repetir password"
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <View style={styles.footTextContainer}>
        <Text style={styles.whiteText}>¿Tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              ...styles.whiteText,
              ...styles.underLineText,
            }}
          >
            Iniciar sesion
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.btn} onPress={onsubmit}>
        <Text style={styles.btnText}>Crear cuenta</Text>
      </Pressable>


      <View style={styles.guestOptionContainer}>
        <Text style={styles.whiteText}>¿Solo quieres dar un vistazo?</Text>
        <Pressable onPress={()=>dispatch(setUser({email:"planta@mundoplanta.com",token:"planta"}))}>
                    <Text style={{ ...styles.whiteText, ...styles.strongText }}>Ingresa como invitado</Text>
                </Pressable>
      </View>
    </LinearGradient>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.crema,
    fontFamily: "Satisfy",
    fontSize: 40,
  },
  subTitle: {
    fontFamily: "Inter",
    fontSize: 18,
    color: colors.cafeClaro,
    fontWeight: "700",
    letterSpacing: 3,
  },
  inputContainer: {
    gap: 16,
    margin: 16,
    marginTop: 48,
    alignItems: "center",
  },
  textInput: {
    padding: 8,
    paddingLeft: 16,
    borderRadius: 16,
    backgroundColor: "#95859E",
    width: textInputWidth,
    color: colors.blanco,
  },
  footTextContainer: {
    flexDirection: "row",
    gap: 8,
  },
  whiteText: {
    color: colors.blanco,
  },
  underLineText: {
    textDecorationLine: "underline",
  },
  strongText: {
    fontWeight: "900",
    fontSize: 16,
  },
  btn: {
    padding: 16,
    paddingHorizontal: 32,
    backgroundColor: colors.azulCobalto,
    borderRadius: 16,
    marginTop: 32,
  },
  btnText: {
    color: colors.blanco,
    fontSize: 16,
    fontWeight: "700",
  },
  guestOptionContainer: {
    alignItems: "center",
    marginTop: 64,
  },
  error: {
    color: colors.crema,
  },
});
