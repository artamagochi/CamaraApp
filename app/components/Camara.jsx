import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function Camara(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  /* let photoCaptured = null; */

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = (photo) => {
    console.log(photo);
    /* photoCaptured = photo.uri; */
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={(ref) => {
          this.camera = ref;
        }}
        style={styles.container}
        type={type}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={takePicture}
          >
            <Feather name="aperture" size={50} color="white" />
            <Text style={{ fontSize: 20, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          {/* <Image source={{ uri: photoCaptured.uri }}></Image> */}
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    width: "100%",
  },
  captureButton: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

export default Camara;
