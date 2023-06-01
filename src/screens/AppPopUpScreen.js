import { Image, StyleSheet, View, Text, Linking, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

const AppPopUpScreen = () => {
    const navigation = useNavigation();
    const openURL = async (url) => {
        const isOpened = await Linking.canOpenURL(url);
        if (isOpened) {
            await Linking.openURL(url);
        }
        else {
            Alert.alert("This is not an accessible link.");
        }
        console.log("Pressed");
    };
    return (
        <>
            <StatusBar style={"auto"} />
            <View style={styles.container}>
                <Image source={require("../../assets/app-pop-up-screen.jpeg")} style={styles.imageStyle} />
                <Entypo name="cross" size={55} color="white" onPress={() => navigation.navigate("BottomTab")} style={styles.iconStyle} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => openURL("https://gemsart.store/")}>
                    <Image source={require("../../assets/pop-up-button.png")} style={styles.buttonStyle} />
                    <Text style={[styles.buttonText, { marginTop: -115 }]}>See Now</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default AppPopUpScreen;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginTop: -75
    },
    imageStyle: {
        height: "105%",
        width: "112%",
        resizeMode: "contain"
    },
    iconStyle: {
        position: "absolute",
        marginTop: 88,
        marginLeft: 340
    },
    buttonContainer: {
        position: "absolute",
        marginTop: 650,
        alignSelf: "center"
    },
    buttonStyle: {
        marginLeft: 45,
        width: 360,
        height: 160
    },
    buttonText: {
        marginLeft: 135,
        fontSize: 32,
        fontWeight: "500",
        color: "white"
    }
});