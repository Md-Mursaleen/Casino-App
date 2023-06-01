import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const GuideScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.headerContainer}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" onPress={() => navigation.navigate("AppPopUp")} style={{ marginLeft: 15 }} />
                <Text style={styles.headerText}>Online Casinos Guide</Text>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require("../../assets/online-casino-guide.jpeg")} style={styles.imageStyle} />
                    <Text style={styles.descriptionText}>When searching for online casinos, it's important to consider several factors to ensure a safe, enjoyable, and rewarding gambling experience. Here is a comprehensive guide to help you identify what to look for when choosing an online casino:{"\n"}{"\n"}
                        •	Licensing and Regulation: Check if the online casino is licensed and regulated by a reputable authority. This ensures that the casino operates within legal guidelines and adheres to industry standards for fair play and player protection.{"\n"}{"\n"}
                        •	Player Acceptance and Availability: Verify that the online casino accepts players from your country or region. Some casinos have restricted jurisdictions, so it's crucial to ensure you are eligible to play. Additionally, check if the casino is available in your  preferred language and offers customer support  in your language.{"\n"}{"\n"}
                        •	Game Selection: Evaluate the variety and quality of games offered by the casino. Look for a diverse collection of slots, table games, live dealer games, and specialty games from renowned software providers. A broad selection allows you to find games that suit  your preferences.{"\n"}{"\n"}
                        •	User Experience and Interface: Consider the user-friendliness and intuitive design of the casino's website or mobile app. A smooth and responsive interface enhances your gaming experience, allowing for easy navigation and seamless gameplay.{"\n"}{"\n"}
                        •	Security and Privacy: Prioritize online casinos that prioritize security measures to protect your personal and financial information. Look for casinos that use advanced encryption technology, have secure payment methods, and adhere to strict privacy {"\n"}policies.{"\n"}{"\n"}
                        •	Bonuses and Promotions: Review the casino's bonus offerings, including welcome bonuses, free spins, and loyalty rewards. Pay attention to the terms and conditions, wagering requirements, and bonus validity periods to ensure they are fair and achievable.{"\n"}{"\n"}
                        •	Payment Options: Check the available deposit and withdrawal methods supported by the casino. Look for a wide range of secure and convenient options such as credit/debit cards, e-wallets, bank transfers, or cryptocurrencies. Ensure the casino supports your preferred payment method.{"\n"}{"\n"}
                        •	Customer Support: Assess the availability and responsiveness of the casino's customer support team. Look for multiple contact channels, such as live chat, email, or phone support, and consider their availability hours. Responsive customer support is essential for addressing any queries or concerns that may arise.{"\n"}{"\n"}
                        •	Reputation and Reviews: Read reviews and seek feedback from other players to gauge the reputation and reliability of the online casino. Consider reputable sources and player forums.{"\n"}{"\n"}
                        •	Responsible Gambling Practices: Choose an online casino that promotes responsible gambling and offers tools to manage your gambling habits. Look for features like deposit limits, self-exclusion options, and responsible gambling resources.{"\n"}{"\n"}
                        By considering these factors, you can make an informed decision when selecting an online casino. Remember to prioritize safety, game variety, user experience, and reliable customer support to enhance your overall online gambling experience.
                    </Text>
                </ScrollView>
            </ScrollView>
        </>
    );
}

export default GuideScreen;

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
        marginLeft: 65,
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