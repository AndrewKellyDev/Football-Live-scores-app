import { Box, HStack } from "native-base";
import { View, Pressable, Dimensions, StyleSheet, Text } from "react-native";
import BottomTabBarIcon from "./BottomTabBarIcon";

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <HStack
      backgroundColor="primary.50"
      position="absolute"
      bottom="8"
      mx="5"
      borderRadius="xl"
      py="3"
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Box
            flex={1}
            justifyContent="center"
            alignItems="center"
            key={index}
            style={styles.mainItemContainer}
          >
            <Pressable onPress={onPress}>
              <BottomTabBarIcon route={route.name} focused={isFocused} />
            </Pressable>
          </Box>
        );
      })}
    </HStack>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  mainItemContainer: {},
});
