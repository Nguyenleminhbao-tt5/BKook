import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { OnboardFlow } from "react-native-onboard";

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <OnboardFlow
        onDone={() => props.onNavigate(RootScreens.MAIN)}
=======
      {/* <OnboardFlow
>>>>>>> minhbao-dev
        pages={[
          {
            title: "BKook",
            subtitle: "Khám phá thế giới ẩm thực qua BKook",
            imageUri:
              "https://scontent.xx.fbcdn.net/v/t1.15752-9/398276654_248332484888928_6713758352444255542_n.png?stp=dst-png_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_ohc=W6VIC0Qfi1YAX9JM8wl&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTPCX72coLCGGOfar8ofonID2VhIsMxeFZlz3Wc96dJ4Q&oe=657469AE",
          },
          {
            title: "Trải nghiệm BKook",
            subtitle: "Sáng tạo và thử nghiệm các món ngon mới với BKook",
            imageUri:
              "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/370283123_716825430476731_7933084495429126724_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=0Evtz8AovucAX97w6cp&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdQPEjOpqINlmwzRfNVFgRTLLmr-swJeA5WyziRSLBJrhA&oe=6574851A",
          },
          {
            title: "Hãy bắt đầu ngay",
            subtitle: "Nấu ăn dễ dàng hơn bao giờ hết với BKook. ",
            imageUri:
              "https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.15752-9/369827998_659328266329241_9154644824216262127_n.png?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=oxQ5wjP40isAX9EQsRa&_nc_ht=scontent.fsgn19-1.fna&oh=03_AdTHaNtifDwTO4aYgupSrHwALAz2q90Ixs48emxM5vQEHg&oe=65747BF4",
          },
        ]}
        type={"fullscreen"}
<<<<<<< HEAD
      />
      {/* <Button onPress={() => props.onNavigate(RootScreens.MAIN)}>
=======
      /> */}
      <Button onPress={() => props.onNavigate(RootScreens.MAIN)}>
>>>>>>> minhbao-dev
        {i18n.t(LocalizationKey.START)}
      </Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
