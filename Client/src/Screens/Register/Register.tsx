import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { RootScreens } from "..";
import { themeColors } from "@/Theme/Variables";
import { ButtonComponent } from "../../Components/Button";
import { ImageComponent } from "../../Components/Image";

export const Register = () => {
  return (
    <SafeAreaView
      className={`flex-1 bg-[${themeColors.bgColor}] flex w-full justify-center items-center`}
    >
      <View className="flex justify-end items-center h-2/5  w-3/4">
      <Image
        style={{
          width: 200,
          height: 200
        }}
        
        source={{uri: "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/393960367_1467934380606701_542441178187778655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHYrfVSf0020OFRvyLZBjeTIHuWQxj5JiQge5ZDGPkmJDNmR_srMce6duJZAZ4YL-ba5R0Xb_vV8zcmvTMId2cj&_nc_ohc=qocreHHxsdQAX8VnsFu&_nc_ht=scontent.fvca1-2.fna&oh=03_AdR2X_vKRiYtNCwHJVMyIMrlDirROKrl9ISoPoLzV0aiOg&oe=65A277A8"}}
      />                      
      </View>
      <View className="flex justify-center items-center h-3/5  w-3/4">
        <View className=" flex w-full flex-col">
        <TextInput
            placeholder="Name"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 mb-4"
          ></TextInput>
          <TextInput
            placeholder="Email"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 my-4"
          ></TextInput>
          <TextInput
            placeholder="Password"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 my-4"
          ></TextInput>
          <TouchableOpacity className="w-full bg-[#F66033] rounded-xl py-3 justify-center items-center my-3">
            <Text className=" text-xl text-white">Register</Text>
          </TouchableOpacity>
          <Text className=" text-sm text-white my-2">Already have an account? Login</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
