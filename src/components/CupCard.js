import { HStack, Image, Text } from "native-base";
import { StyleSheet } from "react-native";

const CupCard = ({ data }) => {
  const { image, label } = data;
  return (
    <HStack
      style={styles.shadowProps}
      alignItems="center"
      borderRadius="xl"
      space="2"
      py="1"
      px="1.5"
      mr="4"
      mb="2"
    >
      <Image size="6" source={image} alt="icon" />
      <Text color="primary.100">{label}</Text>
    </HStack>
  );
};
export default CupCard;

const styles = StyleSheet.create({
  shadowProps: {
    backgroundColor: "#1C1D21",
    shadowColor: "#ff4155",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 10,
    overflow: "visible",
  },
});
