import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/dev";
import AppLoading from "expo-app-loading";

export default function LiveScoreCard(props) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  console.log(props);

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.stadiumText}>{props.match.stadium_name}</Text>
        <Text style={styles.weekText}>Week {props.match.game_week}</Text>

        <View style={styles.matchContainer}>
          <View style={styles.teamContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png",
              }}
            ></Image>
            <View style={{ flexGrow: 1, flexDirection: "row" }}>
              <Text style={styles.teamText}>{props.match.home_name}</Text>
            </View>
            <Text style={styles.homeaway}>Home</Text>
          </View>

          <View style={styles.scoreTime}>
            <Text style={styles.scoreNumber}>
              {props.match.homeGoalCount}:{props.match.awayGoalCount}
            </Text>
            <Text style={styles.time}>FT</Text>
          </View>

          <View style={styles.teamContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c4e9.png",
              }}
            ></Image>
            <View style={{ flexGrow: 1, flexDirection: "row" }}>
              <Text style={styles.teamText}>{props.match.away_name}</Text>
            </View>
            <Text style={styles.homeaway}>Away</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#6c5ce7",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginRight: 20,
    width: 250,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  stadiumText: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
    color: "#fff",
  },
  weekText: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: "center",
    color: "#cccccc",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: "contain",
  },
  scoreTime: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  scoreNumber: {
    fontSize: 25,
    fontFamily: "Poppins_700Bold",
    letterSpacing: 10,
    textAlign: "center",
    color: "#fff",
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    borderColor: "#574ab9",
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: "#998dee",
    textAlign: "center",
    color: "white",
    overflow: "hidden",
  },
  matchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  teamContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  teamText: {
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    flex: 1,
    color: "#fff",
  },
  homeaway: {
    flexWrap: "wrap",
    maxWidth: "90%",
    textAlign: "center",
    color: "#cccccc",
  },
});
