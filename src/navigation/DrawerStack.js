import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/home";
import { TabStack } from "./TabStack";
import Sidebar from "../components/Sidebar";
const DrawerTab = createDrawerNavigator();

export const DrawerStack = () => {
  return (
    <DrawerTab.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <DrawerTab.Screen
        name="TabStack"
        component={TabStack}
        options={{ headerShown: false }}
      />
    </DrawerTab.Navigator>
  );
};
