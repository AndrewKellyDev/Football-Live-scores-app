import react, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/dev";
import AppLoading from "expo-app-loading";
import LiveScoreCard from "../Homescreen Components/Live_Card";
import UpcomingMathCard from "./Upcoming_Matches_Card";

const UpcomingMatches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  // declare the data fetching function
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://api.football-data-api.com/league-matches?key=example&league_id=2012"
      ).then((response) => response.json().then((json) => setMatches(json)));
      setLoading(false);
    }
    fetchMyAPI();
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          alignContent: "center",
        }}
      >
        <Text style={styles.scoresTitle}>Upcoming Matches</Text>
        <Text style={styles.scoresSeeAll}>See All</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {matches.data.slice(0, 10).map((item, index) => (
          <UpcomingMathCard match={item} key={index} />
        ))}

        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          data={matches.data.slice(0, 10)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <UpcomingMathCard match={item} />}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
  },
  scoresTitle: {
    fontSize: 20,
    paddingBottom: 20,
    fontFamily: "Poppins_700Bold",
  },
  scoresSeeAll: {
    color: "#f0932b",
  },
});

export default UpcomingMatches;
