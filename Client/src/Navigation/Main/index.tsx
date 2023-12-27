import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { CategoryContainer } from "@/Screens/Category/CategoryContainer";


const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
<<<<<<< HEAD
    <Tab.Navigator screenOptions={{headerShown: false}}>
=======
    <Tab.Navigator screenOptions={{ headerShown: false }}>
>>>>>>> minhbao-dev
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
<<<<<<< HEAD
=======
        name="Search"
        component={CategoryContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />

      
      <Tab.Screen
>>>>>>> minhbao-dev
        name="Home 1"
        component={HomeContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
    </Tab.Navigator>
  );
};

