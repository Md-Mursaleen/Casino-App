import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const GamesScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.headerContainer}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" onPress={() => navigation.navigate("AppPopUp")} style={{ marginLeft: 15 }} />
                <Text style={styles.headerText}>Online Casinos Best Games</Text>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require("../../assets/online-casino-games.jpeg")} style={styles.imageStyle} />
                    <Text style={styles.descriptionText}>When it comes to online casino games, there are several popular options that provide exciting gameplay and the potential to win real money. Here are some of the best online casino games to play:{"\n"}{"\n"}
                        Slots: Online slots are incredibly popular and come in various themes and formats. They offer easy gameplay and the chance to win substantial jackpots. Many online casinos offer a wide selection of slot games with different features, including bonus rounds, free spins, and progressive jackpots. You can explore hundreds of slot games online, each with its own unique style and gameplay mechanics.{"\n"}{"\n"}
                        Roulette: Roulette is a classic casino game that has successfully made its way to online platforms. It offers a thrilling experience as players bet on where a ball will land on a spinning wheel. Online roulette games come in different variations, such as European, American, and French roulette, each with its own set of rules and odds. With its simplicity and potential for big wins, roulette remains a favorite among online casino players.{"\n"}{"\n"}
                        Blackjack: Blackjack is a card game that combines skill and strategy. The objective is to beat the dealer by getting a hand with a value as close to 21 as possible without exceeding it. Online blackjack games offer various versions, including classic blackjack, multi-hand blackjack, and live dealer blackjack. With its low house edge and the ability to make strategic decisions, blackjack is highly favored by both casual and experienced players.{"\n"}{"\n"}
                        Poker: Online poker rooms provide a platform for players to engage in this popular card game. You can find a wide range of poker variants, such as Texas Hold'em, Omaha, Seven-Card Stud, and more. Online poker offers different tables and tournaments where you can compete against players from around the world. Whether you're a novice or a seasoned player, online poker offers both fun and opportunities for significant winnings.{"\n"}{"\n"}
                        Baccarat: Baccarat is a simple yet elegant card game where players can bet on either the player's or banker's hand or a tie. The goal is to have a hand with a value closest to nine. Online baccarat brings the excitement of this classic game to your fingertips, allowing you to enjoy different variations and participate in live dealer games for an immersive experience.{"\n"}{"\n"}
                        These are just a few examples of the best online casino games available. It's important to note that different players have different preferences, so it's recommended to explore various games and find the ones that suit your interests and playing style. Additionally, always ensure that you play responsibly and choose reputable online casinos that prioritize player security and offer fair gaming experiences.
                    </Text>
                </ScrollView>
            </ScrollView>
        </>
    );
}

export default GamesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b30000"
    },
    headerContainer: {
        marginTop: 45,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    headerText: {
        marginLeft: 60,
        fontSize: 18.5,
        fontWeight: "500"
    },
    imageStyle: {
        width: "100%",
        height: 175
    },
    descriptionText: {
        maxWidth: 360,
        marginBottom: 100,
        marginTop: 25,
        marginLeft: 18,
        fontSize: 16.3,
        fontWeight: "400",
        color: "white",
        lineHeight: 22
    }
});