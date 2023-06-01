import { Image, Pressable, StyleSheet, Text } from "react-native";
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

const HomeCasinoList = ({ data }) => {
    const navigation = useNavigation();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + ".." : string;
    }
    return (
        <Pressable onPress={() => navigation.navigate("CasinoDetails", { tag: data.title, name: data.text, text: data.desc })} style={styles.container}>
            <Image source={items[data.title]} style={styles.imageStyle} />
            <Text style={styles.imageText}>{truncate(data.text, 15)}</Text>
        </Pressable>
    );
}

export default HomeCasinoList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    imageStyle: {
        height: 110,
        width: 110,
        borderRadius: 100
    },
    imageText: {
        marginTop: 5,
        alignSelf: "center",
        fontSize: 14.5,
        fontWeight: "500",
        color: "white"
    }
});