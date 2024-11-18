import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { CategoriesScreen, ProductsScreen, ProductScreen } from "../screens"
import Header from "../components/Header"


const Stack = createNativeStackNavigator()

const Navigator = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator
            screenOptions = {{
                header: ({route}) => <Header subtitle={route.name}/>
            }}
        >
            <Stack.Screen name="Categorias"  component={CategoriesScreen}/>
            
            <Stack.Group
                screenOptions={{
                    color: 'blue'
                }}
            >
                <Stack.Screen name="Productos"  component={ProductsScreen}/>
                <Stack.Screen name="Producto" component={ProductScreen}/>
            </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigator
