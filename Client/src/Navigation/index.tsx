import React from "react";
import { StatusBar, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { LoginContainer } from "@/Screens/Login/LoginContainer";
import { RootScreens } from "@/Screens";
import { Login } from "../Screens/Login/Login";
import { RecipeDetail } from "../Screens/RecipeDetail";
import { ListProduct } from "../Screens/Home/ListProduct";
import { HomeContainer } from "../Screens/Home";
import { Text } from "react-native";
import { Register } from "../Screens/Register/Register";
import { RegisterContainer } from "../Screens/Register";
import { SettingContainer } from "../Screens/Setting";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.LOGIN]: undefined;
  [RootScreens.REGISTER]: undefined;
  [RootScreens.SETTING]: undefined;
  [RootScreens.DETAIL]: undefined;
  [RootScreens.PRODUCTS]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <>
      {/* <View className="absolute bottom-0 z-10 bg-red-500 w-full h-12">
        <Text>hello</Text>
      </View> */}
      <NavigationContainer>
        <StatusBar />
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={RootScreens.WELCOME}
            component={WelcomeContainer}
          />
          <RootStack.Screen
            name={RootScreens.LOGIN}
            component={LoginContainer}
          />
          <RootStack.Screen
            name={RootScreens.SETTING}
            component={SettingContainer}
          />
          <RootStack.Screen
            name={RootScreens.REGISTER}
            component={RegisterContainer}
            options={{}}
          />
          <RootStack.Screen
            name={RootScreens.MAIN}
            component={HomeContainer}
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
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export { ApplicationNavigator };
