import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const items = {
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

const HomeCasinoDetails = ({ data }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("CasinoDetails", { tag: data.title, name: data.name, text: data.text })}>
            <View style={styles.contentContainer}>
                <Image source={items[data.title]} style={styles.imageStyle} />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{data.name}</Text>
                    <Text style={styles.descriptionText}>{data.text}</Text>
                </View>
            </View>
            {data.border === true && (
                <View style={styles.borderStyle} />
            )}
        </Pressable>
    );
}

export default HomeCasinoDetails;

const styles = StyleSheet.create({
    contentContainer: {
        marginLeft: 15,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    imageStyle: {
        height: 45,
        width: 45,
        borderRadius: 50
    },
    textContainer: {
        marginBottom: 8,
        marginLeft: 15
    },
    titleText: {
        fontSize: 17,
        fontWeight: "600",
        color: "white"
    },
    descriptionText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "400",
        color: "white"
    },
    borderStyle: {
        marginTop: 12,
        marginLeft: 82,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "white"
    }
});