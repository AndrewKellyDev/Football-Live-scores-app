import { Box, HStack, Text } from "native-base";
import Bar from "./Bar";

const StatsBar = ({ data }) => {
  const { label, leftValue, rightValue, unit = "" } = data;
  const maxValue = unit
    ? 100
    : parseInt(leftValue) > parseInt(rightValue)
    ? leftValue * 2
    : rightValue * 2;
  return (
    <Box mt="2">
      <HStack justifyContent="space-between">
        <Text color={leftValue >= rightValue ? "primary.100" : "white"}>
          {leftValue + unit}
        </Text>
        <Text fontWeight="semibold" color="white">
          {label}
        </Text>
        <Text color={leftValue <= rightValue ? "primary.100" : "white"}>
          {rightValue + unit}
        </Text>
      </HStack>
      <HStack space="3" my="2">
        <Bar
          red={leftValue >= rightValue ? true : false}
          maxValue={maxValue}
          value={leftValue}
        />
        <Bar
          red={leftValue <= rightValue ? true : false}
          maxValue={maxValue}
          value={rightValue}
          positionRight
        />
      </HStack>
    </Box>
  );
};

export default StatsBar;
