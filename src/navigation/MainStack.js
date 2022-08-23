import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabStack } from "./TabStack";
import { DrawerStack } from "./DrawerStack";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen
        name="DrawerStack"
        options={{ headerShown: false }}
        component={DrawerStack}
      />
    </Stack.Navigator>
  );
};
