import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/dev";
import AppLoading from "expo-app-loading";

export default function UpcomingMathCard(props) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.matchContainer}>
          <View style={styles.teamContainer}>
            <Text style={styles.teamText}>{props.match.home_name}</Text>
            <Image
              style={styles.logo}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png",
              }}
            ></Image>
          </View>

          <View style={styles.scoreTime}>
            <Text style={styles.time}>
              {new Date(props.match.date_unix)
                .toJSON()
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("/")}
            </Text>
          </View>

          <View style={styles.teamContainer}>
            <Image
              style={styles.logo}
              source={{
                uri: "http://assets.stickpng.com/images/580b57fcd9996e24bc43c4e9.png",
              }}
            ></Image>

            <Text style={styles.teamText}>{props.match.away_name}</Text>
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
    width: 320,
    marginBottom: 20,
    padding: 20,
  },
  cardContent: {},

  logo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  scoreTime: {
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 12,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  teamText: {
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
    color: "#fff",
  },
});
