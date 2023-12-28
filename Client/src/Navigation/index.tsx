import React from "react";
import { StatusBar, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
import { RecentCategory } from "@/Screens/Category/RecentCategory";
import { Category } from "@/Screens/Category/Category";
import { RecipeDetail } from "../Screens/RecipeDetail";
import { ListProduct } from "../Screens/Home/ListProduct";
import { HomeContainer } from "../Screens/Home";
import { Text } from "react-native";
import { Seasion } from "@/Screens/Home/Seasion";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.CATEGORY]: undefined;
  [RootScreens.RECENT_CATEGORY]: undefined;
  [RootScreens.DETAIL]: undefined;
  [RootScreens.PRODUCTS]: undefined;
  [RootScreens.SEASION]: undefined;

};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar />
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={RootScreens.WELCOME}
            component={WelcomeContainer}
          />
          <RootStack.Screen
            name={RootScreens.MAIN}
            component={MainNavigator}
            options={{}}
          />
          <RootStack.Screen
            name={RootScreens.DETAIL}
            component={RecipeDetail}
            options={{}}
          />
          <RootStack.Screen
            name={RootScreens.PRODUCTS}
            component={ListProduct}
            options={{}}
          />
          <RootStack.Screen
            name={RootScreens.CATEGORY}
            component={Category}
            options={{}}
          />
          <RootStack.Screen
            name={RootScreens.RECENT_CATEGORY}
            component={RecentCategory}
            options={{}}
          />
          {/* <RootStack.Screen
            name={RootScreens.SEASION}
            component={Seasion}
            options={{}}
          /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export { ApplicationNavigator };
