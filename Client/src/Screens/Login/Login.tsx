import React, { useState } from "react";
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
import { userData } from "@/Components/Context/data";
import { useUser } from "@/Components/Context/UserContext";

type userData = {
  username: string,
  password: string
}

export const Login = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState<userData>({} as userData)

  const {setUserData} = useUser()
  const [error, setError] = useState<boolean>(true)

  const handleCheck = () => {
    const userLog = userData.filter(i => i.username === user.username && i.password === user.password)
    if ( userLog.length > 0) {
      setUserData(userLog[0])
      navigation.navigate('Main' as never)
      setError(true)
    }
    else setError(false)
  }

  return (
    <SafeAreaView
      className={`flex-1 bg-[${themeColors.bgColor}] flex w-full justify-center items-center`}
    >
      <View className="flex justify-end items-center h-2/5  w-3/4">
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{
            uri: "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.15752-9/393960367_1467934380606701_542441178187778655_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHYrfVSf0020OFRvyLZBjeTIHuWQxj5JiQge5ZDGPkmJDNmR_srMce6duJZAZ4YL-ba5R0Xb_vV8zcmvTMId2cj&_nc_ohc=qocreHHxsdQAX8VnsFu&_nc_ht=scontent.fvca1-2.fna&oh=03_AdR2X_vKRiYtNCwHJVMyIMrlDirROKrl9ISoPoLzV0aiOg&oe=65A277A8",
          }}
        />
      </View>
      <View className="flex justify-center items-center h-2/5  w-3/4">
        <View className=" flex w-full flex-col">
          <TextInput
            placeholder="Username"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 mb-4"
            onChangeText={(e) => setUser({...user, 'username': e})}

          ></TextInput>
          <TextInput
            placeholder="Password"
            placeholderTextColor={`#9C9C9C`}
            className="text-white border-b-2 border-white text-lg pb-1 my-4"
            onChangeText={(e) => setUser({...user, 'password': e})}
          ></TextInput>
          {
            !error &&           
            <View>
              <Text className='text-sm  text-red-500'>Username or password is incorrect</Text>
            </View>
          }


          <TouchableOpacity
            onPress={() => handleCheck()}
            className="w-full bg-[#F66033] rounded-xl py-3 justify-center items-center my-3"
          >
            <Text className=" text-xl text-white">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-sm  text-[#F66033]">
        Don't have account? Register
      </Text>
      <View className="flex justify-start items-center h-1/5 w-3/4 ">
        <View className=" flex w-full">
          <View>
            <TouchableOpacity
                onPress={() => navigation.navigate(RootScreens.REGISTER)}
              className={`w-full bg-[${themeColors.bgColor}] rounded-xl py-3 justify-center items-center my-3 border border-white`}
            >
              <Text className=" text-lg text-white">Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(RootScreens.REGISTER)}
          >
           
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};