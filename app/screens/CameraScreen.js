import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";

function CameraScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoTaken, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = (photo) => {
    console.log(photo);
    /* photoCaptured = photo.uri; */
    setPhoto(photo.uri);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.camaraView}>
        <Camera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.camera}
          type={type}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          />
        </Camera>
      </View>

      <View style={styles.buttonsView}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={this.takePicture}>
            <Feather name="aperture" size={50} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageTaken}>
          <Image source={{ uri: photoTaken }} style={styles.picTaken} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 1,
    height: 40,
    width: "100%",
  },
  camaraView: {
    flex: 0.8,
    margin: 10,
    width: "100%",
    height: "100%",
  },
  buttonsView: {
    flexDirection: "row",
    backgroundColor: "gold",
    flex: 0.2,
    margin: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  picTaken: {
    backgroundColor: "gold",
    width: "100%",
    height: "100%",
  },
  icon: {
    backgroundColor: "gold",
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageTaken: {
    backgroundColor: "gold",
    width: "50%",
    height: "100%",
  },
});

export default CameraScreen;

/* return (
  <View style={styles.container}>
    <View style={styles.camaraView}>
      <Camara />
    </View>
    <View style={styles.buttonsView}>
      <TouchableOpacity
        onPress={() => {
          Camara.takePicture;
        }}
      >
        <Feather name="aperture" size={50} color="white" />
      </TouchableOpacity>
    </View>
  </View>
); */
