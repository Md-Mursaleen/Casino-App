import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const SlotsScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.headerContainer}>
                <Ionicons name="arrow-back-sharp" size={25} color="black" onPress={() => navigation.navigate("AppPopUp")} style={{ marginLeft: 15 }} />
                <Text style={styles.headerText}>Best Casino Slots Guide</Text>
            </View>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require("../../assets/slots-themes.jpeg")} style={styles.imageStyle} />
                    <Text style={styles.descriptionText}>When it comes to online casino slots, the choice of themes is vast and varied, catering to different preferences and interests. Here is a guide to some of the best themes you can find in online casino slots:{"\n"}{"\n"}
                        Medieval Styled Slots: If you enjoy the allure of the Dark Ages, the theme of King Arthur and the Knights of the Round Table, slots like Avalon and Avalon 2 would be perfect for you. These slots take you back to a time of kings, knights, jesters, catapults, and other medieval elements.{"\n"}{"\n"}
                        Animal Slots: For animal lovers, there are numerous slots that feature furry creatures. Whether you adore the king of the jungle or prefer pampered pooches, animal-themed slots offer a chance to spin alongside cute, magnificent, or fierce characters from the animal kingdom.{"\n"}{"\n"}
                        Aztec Slots: Aztec-themed slots draw inspiration from the aesthetics of ancient civilizations. You can expect grand temples, crumbling pyramids, and traditional South American artworks in these slots. The vivid color schemes and intriguing visuals make this theme particularly popular among players.{"\n"}{"\n"}
                        Jungle Slots: Jungle-themed slots often have ties with Aztec slots but aren't limited to them. These slots take you deep into lush forests, where exotic animals, tribal artifacts, and hidden treasures await. Jungle slots offer an adventurous and immersive gaming experience.{"\n"}{"\n"}
                        A few examples for slots themes:{"\n"}{"\n"}
                        - Gonzo's Quest by NetEnt{"\n"}
                        - Jungle Jim El Dorado by Microgaming{"\n"}
                        - Amazon Queen by WMS{"\n"}{"\n"}
                        Egyptian Slots: Step into the world of pharaohs, pyramids, and ancient Egyptian mythology with slots themed around this civilization. Egyptian slots often feature iconic symbols like the Eye of Horus and Cleopatra, creating an atmosphere of mystery and intrigue.{"\n"}{"\n"}
                        A few examples for slots themes:{"\n"}{"\n"}
                        - Book of The Dead By Play'n GO{"\n"}
                        - Cleopatra By IGT{"\n"}
                        - Egyptian Heroes by NetEnt{"\n"}{"\n"}
                        Fantasy Slots: If you have a love for all things magical and fantastical, then fantasy-themed slots are the way to go. These slots transport you to enchanted realms filled with mythical creatures, spellbinding landscapes, and epic quests.{"\n"}{"\n"}
                        A few examples for slots themes:{"\n"}{"\n"}
                        - Immortal Romance by Microgaming{"\n"}
                        - Warlords: Crystals of Power by NetEnt{"\n"}
                        - Avalon II: The Quest for the Grail by Microgaming{"\n"}{"\n"}
                        Movie and TV Slots: Many popular movies {"\n"}and TV shows have been adapted into exciting slot games. Whether you're a fan of superheroes, famous film franchises, or beloved TV series, there's a good chance you'll find a slot game that captures the essence of your favorite on-screen entertainment.{"\n"}{"\n"}
                        A few examples for slots themes:{"\n"}{"\n"}
                        - Game of Thrones by Microgaming{"\n"}
                        - Jurassic Park by Microgaming{"\n"}
                        - The Dark Knight by Playtech{"\n"}{"\n"}
                        Sports Slots: Sports-themed slots combine the thrill of gambling with the excitement of athletic competitions. You can find slots based on popular sports like football, basketball, baseball, and more, allowing you to combine your passion for sports with the thrill of spinning the reels.{"\n"}{"\n"}
                        Remember to explore different online casinos and game providers to find a wide range of themes and variations. Each theme offers a unique experience, with captivating visuals, engaging soundtracks, and bonus features that add to the overall enjoyment of playing online slots.
                    </Text>
                </ScrollView>
            </ScrollView>
        </>
    );
}

export default SlotsScreen;

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