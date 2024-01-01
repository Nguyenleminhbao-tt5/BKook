import React, { useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import * as Media from "expo-media-library";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Scan = () => {
  const [listFood, setFood] = useState<string[]>([]);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [image, setImage] = useState<string>("");
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  const toggleCamera = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePicture = async () => {
    if (cameraRef)
      try {
        const data = await cameraRef?.current?.takePictureAsync();
        const upload = await axios.post(
          "https://bkook-production.up.railway.app/api/upload",
          {
            image: data.uri,
          }
        );
        setImage(upload.data);
        console.log(upload.data.ingredients.slice(0,2))
        const ingredients = upload.data.ingredients.slice(0,2);
        
        navigation.navigate('CategorySearch', {input: ingredients[1] })


      } catch (err) {
        throw err;
      }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity className=" relative" style={styles.button} onPress={takePicture}>
            <View className=" rounded-full w-[70px] h-[70px] bg-[#f1f1f1]"></View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default Scan;
