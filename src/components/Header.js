import { Box, Image, Stack, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Images } from "../config/images";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mt="5"
    >
      <Image size="10" source={Images.avatar} alt="avatar" />
      <Text
        borderColor="white"
        borderStyle="solid"
        borderWidth="1"
        borderRadius="lg"
        color="white"
        py="1"
        px="4"
        fontSize="lg"
      >
        LOGO PLACEHOLDER
      </Text>
      <Box
        borderStyle="solid"
        borderRadius="lg"
        p="2"
        style={styles.shadowProps}
      >
        <AntDesign name="search1" size={24} color="white" />
      </Box>
    </Stack>
  );
};

export default Header;

const styles = StyleSheet.create({
  shadowProps: {
    backgroundColor: "#1C1D21",
    shadowColor: "#ffffff",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 20,
    zIndex: 99,
    overflow: "visible",
  },
});
