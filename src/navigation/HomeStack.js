import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import PlayStats from "../screens/playstats";

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlayStats" component={PlayStats} />
    </Stack.Navigator>
  );
};

export default HomeStack;
