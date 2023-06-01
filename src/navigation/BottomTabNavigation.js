import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SlotsScreen from "../screens/SlotsScreen";
import GuideScreen from "../screens/GuideScreen";
import GamesScreen from "../screens/GamesScreen";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <BottomTab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarStyle: {
                    height: 65,
                    backgroundColor: "white"
                },
                tabBarActiveTintColor: "#197195",
                tabBarInactiveTintColor: "#919daa"
            }
        }>
            <BottomTab.Screen name="Home" component={HomeScreen} options={
                {
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ color }) => (<Entypo name="home" size={22} color={color} />)
                }
            } />
            <BottomTab.Screen name="Slots" component={SlotsScreen} options={
                {
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ color }) => (<FontAwesome5 name="dice-five" size={22} color={color} />)
                }
            } />
            <BottomTab.Screen name="Guide" component={GuideScreen} options={
                {
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ color }) => (<FontAwesome name="star" size={22} color={color} />)
                }
            } />
            <BottomTab.Screen name="Games" component={GamesScreen} options={
                {
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ color }) => (<MaterialIcons name="games" size={22} color={color} />)
                }
            } />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigation;

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        marginBottom: 12,
        fontSize: 12.5,
        fontWeight: "500"
    }
});