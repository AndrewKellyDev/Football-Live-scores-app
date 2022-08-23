import { useState } from "react";
import { FlatList } from "react-native";
import { Box, Pressable, Text, ScrollView } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import LeagueCard from "../../components/LeagueCard";
import UpcomingMatchCard from "../../components/UpcomingMatchCard";
import { cupData, leagueData, upcomingMatchData } from "../../config/data";
import CupCard from "../../components/CupCard";

const HomeScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleUpcomingData, setVisibleUpcomingData] = useState(
    upcomingMatchData.slice(0, 3)
  );
  const handleScroll = (event) => {
    setCurrentIndex(
      parseInt(
        (event.nativeEvent.contentOffset.x /
          event.nativeEvent.contentSize.width) *
          leagueData.length +
          0.5
      )
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#1C1D21" }}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#1C1D21", "#050506", "#17181C"]}
      >
        <Box p="5">
          <Header />
          <Box mt="8">
            <FlatList
              horizontal
              keyExtractor={(item, index) => index.toString()}
              data={cupData}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => <CupCard data={item} />}
            />
          </Box>
          <Box flexDirection="row" mt="4">
            <Text fontSize="2xl" fontWeight="bold" color="primary.100">
              Live{" "}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Match
            </Text>
          </Box>
          <FlatList
            horizontal
            keyExtractor={(item, index) => index.toString()}
            data={leagueData}
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            renderItem={({ item, index }) => (
              <LeagueCard
                data={item}
                active={index === currentIndex ? true : false}
                onPress={() => {
                  navigation.navigate("PlayStats", {
                    data: { item },
                  });
                }}
              />
            )}
          />
          <Box
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="space-between"
            mt="6"
          >
            <Box flexDirection="row">
              <Text fontSize="2xl" fontWeight="bold" color="primary.100">
                Upcoming{" "}
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="white">
                Matches
              </Text>
            </Box>
            {visibleUpcomingData.length < 5 && (
              <Pressable
                onPress={() => {
                  setVisibleUpcomingData(upcomingMatchData);
                }}
              >
                <Text color="primary.100">See all</Text>
              </Pressable>
            )}
          </Box>
          <Box pb="20">
            {visibleUpcomingData.map((data, index) => (
              <UpcomingMatchCard data={data} key={index} />
            ))}
          </Box>
        </Box>
      </LinearGradient>
    </ScrollView>
  );
};

export default HomeScreen;
