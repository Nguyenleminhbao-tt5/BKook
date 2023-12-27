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
  Pressable,
} from "react-native";
import { RootScreens } from "..";
import { themeColors } from "@/Theme/Variables";
import { ButtonComponent } from "../../Components/Button";
import { ImageComponent } from "../../Components/Image";
import { useNavigation } from "@react-navigation/native";

export const Setting = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className={`flex-1 bg-[${themeColors.bgColor}] flex w-full`}>
      <View className="w-full h-14 bg-[#606060] my-10 flex flex-col">
        <View>
          <Pressable onPress={() => navigation.navigate(RootScreens.MAIN)}>
            <Text className=" text-sm  text-[#F66033]">quay lai</Text>
          </Pressable>
        </View>
        <View>
          <Text className="text-white text-xl">Cài đặt</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
