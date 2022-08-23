import { Box, Text, HStack, Pressable, ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import LeagueCard from "../../components/LeagueCard";
import StatsBar from "../../components/StatsBar";
import { useState } from "react";

const RADIOSTATUS = {
  STATS: "STATS",
  LINEUP: "LINEUP",
  SUMMARY: "SUMMARY",
};

const PlayStats = ({ route, navigation }) => {
  const { data } = route.params;
  const [radioStatus, setRadioStatus] = useState(RADIOSTATUS.STATS);

  return (
    <ScrollView>
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#1C1D21", "#050506", "#17181C"]}
      >
        <Box px="5" pt="10" pb="20">
          <HStack justifyContent="space-between" alignItems="center">
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
              backgroundColor="primary.500"
              p="3"
              borderRadius="2xl"
              style={styles.shadowProps}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
            <Text fontSize="2xl" color="white">
              Premier League
            </Text>
            <Box
              backgroundColor="primary.500"
              p="3"
              borderRadius="2xl"
              style={styles.shadowProps}
            >
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="white"
              />
            </Box>
          </HStack>
          <Box>
            <LeagueCard data={data.item} inStats active />
          </Box>

          <Box
            my="4"
            p="4"
            borderStyle="solid"
            borderWidth="1"
            borderColor="white"
            borderRadius="xl"
          >
            <HStack justifyContent="space-between" space="2" mb="5">
              <Pressable
                flex="1"
                borderStyle="solid"
                borderColor="white"
                borderRadius="md"
                py="1"
                style={{
                  borderWidth: radioStatus === RADIOSTATUS.STATS ? 0 : 1,
                  backgroundColor:
                    radioStatus === RADIOSTATUS.STATS
                      ? "#FF4155"
                      : "transparent",
                }}
                onPress={() => setRadioStatus(RADIOSTATUS.STATS)}
              >
                <Text textAlign="center" color="white">
                  Stats
                </Text>
              </Pressable>
              <Pressable
                flex="1"
                borderStyle="solid"
                borderColor="white"
                borderRadius="md"
                py="1"
                style={{
                  borderWidth: radioStatus === RADIOSTATUS.LINEUP ? 0 : 1,
                  backgroundColor:
                    radioStatus === RADIOSTATUS.LINEUP
                      ? "#FF4155"
                      : "transparent",
                }}
                onPress={() => setRadioStatus(RADIOSTATUS.LINEUP)}
              >
                <Text textAlign="center" color="white">
                  Line-up
                </Text>
              </Pressable>
              <Pressable
                flex="1"
                borderStyle="solid"
                borderColor="white"
                borderRadius="md"
                py="1"
                style={{
                  borderWidth: radioStatus === RADIOSTATUS.SUMMARY ? 0 : 1,
                  backgroundColor:
                    radioStatus === RADIOSTATUS.SUMMARY
                      ? "#FF4155"
                      : "transparent",
                }}
                onPress={() => setRadioStatus(RADIOSTATUS.SUMMARY)}
              >
                <Text textAlign="center" color="white">
                  Summary
                </Text>
              </Pressable>
            </HStack>
            {Object.keys(data.item.stats).map((key, index) => (
              <StatsBar
                data={{
                  label: data.item.stats[key].label,
                  leftValue: data.item.stats[key].home,
                  rightValue: data.item.stats[key].away,
                  unit: data.item.stats[key].unit,
                }}
                key={index}
              />
            ))}
          </Box>
        </Box>
      </LinearGradient>
    </ScrollView>
  );
};

export default PlayStats;

const styles = StyleSheet.create({
  shadowProps: {
    shadowColor: "#cccccc",
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 10,
    zIndex: 99,
    overflow: "visible",
  },
});
