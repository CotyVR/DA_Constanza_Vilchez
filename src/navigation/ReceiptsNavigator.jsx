import { createNativeStackNavigator } from "@react-navigation/native-stack"
import CartScreen from "../screens/CartScreen"
import ReceiptsScreen from "../screens/ReceiptsScreen"
import Header from "../components/Header"

const Stack = createNativeStackNavigator()


const ReceiptsNavigator  = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            header: ({ route }) => <Header subtitle={route.name} />,
          }}
        >
            <Stack.Screen component={CartScreen} name="Recibos" />
        </Stack.Navigator>
    )
}

export default ReceiptsNavigator