import { StyleSheet, Pressable } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, Box, Flex, Stack } from "native-base";
import { Images } from "../config/images";
import SideBarItem from "./SideBarItem";

const Sidebar = (props) => {
  const { navigate } = useNavigation();

  return (
    <Box flex={1} safeArea bg="primary.50">
      <DrawerContentScrollView {...props}>
        <Box px="5" py="10">
          <Stack space="5" direction="row" alignItems="center" mb="4">
            <Image source={Images.avatar} alt="avatar" size="sm" />
            <Box>
              <Text color="white" fontWeight="bold">
                JOHN DOE
              </Text>
              <Text color="gray.500" fontSize="xs" style={styles.id}>
                @john_doe
              </Text>
            </Box>
          </Stack>
          <Box my="2">
            <Text color="white" fontSize="xl">
              General
            </Text>
            <SideBarItem
              value="View Profile"
              onPress={() => {
                navigate("MainStack", {
                  screen: "DrawerStack",
                  params: { screen: "TabStack", params: { screen: "Profile" } },
                });
              }}
            />
            <SideBarItem value="Notification Settings" />
          </Box>
          <Box my="2">
            <Text color="white" fontSize="xl">
              Legal
            </Text>
            <SideBarItem value="Terms of Use" />
            <SideBarItem value="Privacy Policy" />
            <SideBarItem value="Copyright declaration" />
          </Box>
          <Box my="2">
            <Text color="white" fontSize="xl">
              Connect
            </Text>
            <SideBarItem value="Follow us on Twitter" />
            <SideBarItem value="Follow us on Facebook" />
            <SideBarItem value="Follow us on Youtube" />
            <SideBarItem value="Follow us on Instagram" />
          </Box>
          <Pressable>
            <Text color="primary.100" fontSize="2xl" mt="1">
              Logout
            </Text>
          </Pressable>
        </Box>
      </DrawerContentScrollView>
    </Box>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  header: {},
  sectionView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
