import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "@/Screens/Home";
import { CategoryContainer } from "@/Screens/Category/CategoryContainer";
import { Seasion } from "@/Screens/Home/Seasion";
import { BottomTabBar } from '@react-navigation/bottom-tabs'

import { ScanContainer } from "@/Screens/Scan/ScanContainer";
import { LoginContainer } from "../../Screens/Login";
import { RegisterContainer } from "../../Screens/Register";

const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {

  return (
    <Tab.Navigator  tabBar={props => <BottomTabBar {...props} state={{...props.state, routes: props.state.routes.slice(0,4)}}></BottomTabBar>}>
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Search"
        component={CategoryContainer}
        options={{
          tabBarLabel: "Search",
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanContainer}
        options={{
          tabBarLabel: "Scan",

        }}
      />

      <Tab.Screen
        name="Post"
        component={Seasion}
        options={{
          tabBarLabel: "Post",
  
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Seasion}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",    
        }}
      />
      <Tab.Screen
        name="Seasion"
        component={Seasion}
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
        name="Register"
        component={RegisterContainer}
        options={{
          tabBarIconStyle: { display: "none" },
          tabBarLabelPosition: "beside-icon",
        }}
      />
    </Tab.Navigator>
  );
};
