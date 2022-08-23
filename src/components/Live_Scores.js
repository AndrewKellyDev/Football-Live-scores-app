import react, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/dev";
import AppLoading from "expo-app-loading";
import LiveScoreCard from "../Homescreen Components/Live_Card";

const LiveScores = () => {
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
      <Text style={styles.scoresTitle}>Live Matchs</Text>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={matches.data.slice(0, 10)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <LiveScoreCard match={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: "7%",
    paddingTop: "7%",
    flex: 1,
  },
  scoresTitle: {
    fontSize: 20,
    paddingBottom: 20,
    fontFamily: "Poppins_700Bold",
  },
});

export default LiveScores;
