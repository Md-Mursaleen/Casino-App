import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";
import AppPopUpScreen from "../screens/AppPopUpScreen";
import CasinoDetailsScreen from "../screens/CasinoDetailsScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AppPopUp" >
                <Stack.Screen name="AppPopUp" component={AppPopUpScreen} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="CasinoDetails" component={CasinoDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;