import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet } from "react-native";
import { colors } from "../global/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

//El TabNavigator manda a los siguientes enlaces (es el padre y los demas sus hijos):
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import ReceiptsNavigator from "./ReceiptsNavigator";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="store"
              size={32}
              color={focused ? colors.azulCobalto : colors.cafeClaro}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shopping-cart"
              size={32}
              color={focused ? colors.azulCobalto : colors.cafeClaro}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Receipts"
        component={ReceiptsNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="receipt-long"
              size={32}
              color={focused ? colors.azulCobalto : colors.cafeClaro}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="account-circle"
              size={32}
              color={focused ? colors.azulCobalto : colors.cafeClaro}
            />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 64,
    backgroundColor: colors.verdeClaro,
  },
});
