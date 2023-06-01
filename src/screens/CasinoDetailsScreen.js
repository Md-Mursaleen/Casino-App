import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { itemsDetails } from "../data/HomeScreenData";

const itemsImage = {
    cazimboo: require("../../assets/casino-banner/cazimbo.png"),
    europa: require("../../assets/casino-banner/europa.png"),
    gambino: require("../../assets/casino-banner/gambino.png"),
    zodiac: require("../../assets/casino-banner/zodiac.png"),
    ignition: require("../../assets/casino-banner/igntion.png"),
    ma: require("../../assets/casino-banner/ma-chance.png"),
    magic: require("../../assets/casino-banner/magic-red.png"),
    neo: require("../../assets/casino-banner/neo-spin.png"),
    planet: require("../../assets/casino-banner/planet7.png"),
    play: require("../../assets/casino-banner/playojo.png"),
    red: require("../../assets/casino-banner/red-dog.png"),
    slots: require("../../assets/casino-banner/slots-of-vegas.png"),
    unique: require("../../assets/casino-banner/unique.png"),
    uptown: require("../../assets/casino-banner/uptown-aces.png"),
    woo: require("../../assets/casino-banner/woo.png")
};

const itemsIcon = {
    cazimboo: require("../../assets/casino-icons/cazimbooicon.jpg"),
    europa: require("../../assets/casino-icons/europa.png"),
    gambino: require("../../assets/casino-icons/gambinoslots.png"),
    zodiac: require("../../assets/casino-icons/zodiac.png"),
    ignition: require("../../assets/casino-icons/igntion.png"),
    ma: require("../../assets/casino-icons/machance.png"),
    magic: require("../../assets/casino-icons/magicred.png"),
    neo: require("../../assets/casino-icons/neospin.png"),
    planet: require("../../assets/casino-icons/planet7.png"),
    play: require("../../assets/casino-icons/playojo.png"),
    red: require("../../assets/casino-icons/reddog.png"),
    slots: require("../../assets/casino-icons/slotsofvegas.png"),
    unique: require("../../assets/casino-icons/unique.png"),
    uptown: require("../../assets/casino-icons/uptownaces.png"),
    woo: require("../../assets/casino-icons/woo.png")
};

const CasinoDetailsScreen = ({ route }) => {
    const { tag, name, text } = route.params;
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.headerContainer}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" onPress={() => navigation.navigate("AppPopUp")} style={{ marginLeft: 15 }} />
                <Text style={styles.headerText}>Casinos reviews</Text>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Image source={itemsImage[tag]} style={styles.bannerImageStyle} />
                <View style={styles.topContainer}>
                    <Image source={itemsIcon[tag]} style={styles.iconImageStyle} />
                    <View style={styles.topTextContainer}>
                        <Text style={styles.topText}>{name}</Text>
                        <Text style={[styles.topText, { marginTop: 5 }]}>Casino Rate: {itemsDetails[tag].rating}</Text>
                    </View>
                </View>
                <Text style={styles.textStyle}>{text}</Text>
                <Text style={styles.reviewTitle}>{name} Review</Text>
                <Text style={styles.reviewText}>{itemsDetails[tag].reviews}</Text>
            </ScrollView>
        </>
    );
}

export default CasinoDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#197195"
    },
    headerContainer: {
        marginTop: 45,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        marginLeft: 90,
        fontSize: 18.5,
        fontWeight: "500"
    },
    bannerImageStyle: {
        height: 160,
        width: "100%"
    },
    iconImageStyle: {
        height: 100,
        width: 100,
        borderRadius: 100
    },
    topContainer: {
        marginTop: 15,
        marginLeft: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    topTextContainer: {
        marginLeft: 10
    },
    topText: {
        fontSize: 16.5,
        fontWeight: "500",
        color: "white"
    },
    textStyle: {
        marginTop: 15,
        marginLeft: 30,
        fontSize: 15.5,
        fontWeight: "500",
        color: "white"
    },
    reviewTitle: {
        marginTop: 50,
        alignSelf: "center",
        fontSize: 17,
        fontWeight: "500",
        color: "white"
    },
    reviewText: {
        maxWidth: 360,
        marginBottom: 50,
        marginTop: 25,
        marginLeft: 18,
        fontSize: 16,
        fontWeight: "400",
        color: "white",
        lineHeight: 22
    }
});