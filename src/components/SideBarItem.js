import { Text, Pressable } from "native-base";
import { ChevronRightIcon } from "native-base";

const SideBarItem = ({ value, onPress = null }) => {
  return (
    <Pressable
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      my="1"
      onPress={onPress}
    >
      <Text color="gray.500">{value}</Text>
      <ChevronRightIcon />
    </Pressable>
  );
};

export default SideBarItem;
