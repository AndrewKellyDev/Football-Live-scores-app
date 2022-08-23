import { Text, Box, Image, HStack, Stack } from "native-base";
import { StyleSheet } from "react-native";

const UpcomingMatchCard = ({ data }) => {
  const { homeClubAvatar, homeName, awayClubAvatar, awayName, time, date } =
    data;
  return (
    <HStack
      alignItems="center"
      mt="4"
      borderRadius="xl"
      space="3"
      py="1"
      px="1.5"
      style={styles.shadowProps}
    >
      <Text fontSize="xs" flex="1" textAlign="center" color="white">
        {homeName}
      </Text>
      <Image
        resizeMode="contain"
        size="10"
        source={homeClubAvatar}
        alt="home"
      />
      <Stack>
        <Text color="primary.100" fontWeight="bold">
          {time}
        </Text>
        <Text color="white" fontSize="xs">
          {date}
        </Text>
      </Stack>
      <Image
        resizeMode="contain"
        size="10"
        source={awayClubAvatar}
        alt="away"
      />
      <Text fontSize="xs" flex="1" textAlign="center" color="white">
        {awayName}
      </Text>
    </HStack>
  );
};

export default UpcomingMatchCard;

const styles = StyleSheet.create({
  shadowProps: {
    backgroundColor: "#1C1D21",
    shadowColor: "#ff4155",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
    overflow: "visible",
  },
});
