import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { CategoryContainer } from "@/Screens/Category/CategoryContainer";
import { ScanContainer } from "@/Screens/Scan/ScanContainer";
import { LoginContainer } from "../../Screens/Login";
import { RegisterContainer } from "../../Screens/Register";
import ProfileContainer from "../../Screens/Profile/ProfileContainer";
import DetailSaveDishesScreen from "../../Screens/Profile/DetailSaveDishesScreen";
import CreateFood from "../../Screens/Profile/CreateFood";

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
        name="Search"
        component={CategoryContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
        name="Home 1"
        component={HomeContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
         <Tab.Screen
        name="Profile"
        component={ProfileContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
        <Tab.Screen
        name="Test screen"
        component={DetailSaveDishesScreen}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
      <Tab.Screen
        name="test screen 1"
        component={CreateFood}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
    </Tab.Navigator>
  );
};
