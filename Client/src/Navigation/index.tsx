import React from "react";
import { StatusBar, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./Main";
import { WelcomeContainer } from "@/Screens/Welcome";
import { RootScreens } from "@/Screens";
<<<<<<< HEAD
import { RecipeDetail } from "../Screens/RecipeDetail";
import { ListProduct } from "../Screens/Home/ListProduct";
import { HomeContainer } from "../Screens/Home";
import { Text } from "react-native";
=======
import { RecentCategory } from "@/Screens/Category/RecentCategory";
import { Category } from "@/Screens/Category/Category"; 
>>>>>>> minhbao-dev

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
<<<<<<< HEAD
  [RootScreens.DETAIL]: undefined;
  [RootScreens.PRODUCTS]: undefined;


=======
  [RootScreens.CATEGORY]: undefined;
  [RootScreens.RECENT_CATEGORY]: undefined;
>>>>>>> minhbao-dev
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  return (
<<<<<<< HEAD
    <>
      <View className='absolute bottom-0 z-10 bg-red-500 w-full h-12'>
        <Text>hello</Text>
      </View>
      <NavigationContainer>
        <StatusBar />
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            name={RootScreens.WELCOME}
            component={WelcomeContainer}
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
=======
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
          name={RootScreens.CATEGORY}
          component={Category}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.RECENT_CATEGORY}
          component={RecentCategory}
          options={{}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
>>>>>>> minhbao-dev
  );
};

export { ApplicationNavigator };
