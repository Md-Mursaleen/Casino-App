import React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import HomeCasinoList from "../components/HomeCasinoList";
import { listData, casinoDetails } from "../data/HomeScreenData";
import HomeCasinoDetails from "../components/HomeCasinoDetails";

const HomeScreen = () => {
    return (
        <>
            <StatusBar style={"auto"} />
            <Image source={require("../../assets/welcome-page.jpeg")} style={styles.imageStyle} />
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 10 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {listData.map((data, index) => (
                            <HomeCasinoList key={index} data={data} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.detailsContainer}>
                    {casinoDetails.map((data, index) => (
                        <HomeCasinoDetails key={index} data={data} />
                    ))}
                </View>
            </ScrollView>
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b30000"
    },
    detailsContainer: {
        marginTop: 25,
        marginBottom: 15
    },
    imageStyle: {
        height: 180,
        width: "100%"
    }
});