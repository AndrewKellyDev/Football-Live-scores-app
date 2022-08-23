import { Box } from "native-base";

const Bar = ({ red = false, positionRight = false, value, maxValue }) => {
  return (
    <Box
      backgroundColor="primary.600"
      borderRadius="xl"
      flex="1"
      h="2"
      alignItems={positionRight ? "flex-end" : "flex-start"}
    >
      <Box
        backgroundColor={red ? "primary.100" : "white"}
        h="2"
        borderRadius="xl"
        style={{ width: (value * 100) / maxValue + "%" }}
      ></Box>
    </Box>
  );
};

export default Bar;
