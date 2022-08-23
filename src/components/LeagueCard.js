import { Box, Image, Pressable, Text } from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { Images } from "../config/images";

const LeagueCard = ({ data, onPress = null, inStats = false, active }) => {
  const {
    homeClubAvatar,
    homeName,
    week,
    score,
    time,
    awayClubAvatar,
    awayName,
  } = data;

  return (
    <Pressable mr={inStats ? "0" : "4"} mt="4" onPress={onPress}>
      <ImageBackground
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 20,
          overflow: "hidden",
          opacity: active ? 1 : 0.4,
        }}
        source={active ? Images.leagueCard : Images.leagueCardInActive}
        resizeMode="contain"
        backgroundColor={active ? "#FF4155" : "#1C1D21"}
      >
        <Text color="white" fontSize="lg" fontWeight="bold">
          Premier League
        </Text>
        <Text color="primary.200" fontSize="md" fontWeight="bold">
          {`Week ${week}`}
        </Text>
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          <Box justifyContent="center" alignItems="center">
            <Box w="100" justifyContent="center" alignItems="center">
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={homeClubAvatar}
                alt={homeName}
              />
            </Box>

            <Text color="white" fontSize="lg">
              Tottenham
            </Text>
            <Text fontSize="md">Home</Text>
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Text color="white" fontWeight="bold" fontSize="3xl">
              {score}
            </Text>
            <Box
              px="2"
              borderColor="white"
              borderStyle="solid"
              borderWidth="1"
              borderRadius="2xl"
              backgroundColor="primary.300"
            >
              <Text color="primary.400" fontWeight="bold">
                {`${time}'`}
              </Text>
            </Box>
          </Box>
          <Box justifyContent="center" alignItems="center">
            <Box w="100" justifyContent="center" alignItems="center">
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={awayClubAvatar}
                alt={awayName}
              />
            </Box>
            <Text color="white" fontSize="lg">
              {awayName}
            </Text>
            <Text fontSize="md">Away</Text>
          </Box>
        </Box>
      </ImageBackground>
    </Pressable>
  );
};

export default LeagueCard;
