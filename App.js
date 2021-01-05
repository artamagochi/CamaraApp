import React, { useState, useEffect } from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import CameraScreen from "./app/screens/CameraScreen";
//import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import RNDrawOnScreen from "react-native-draw-on-screen";
import { Battlefield } from "./app/components/Battlefield";
import SvgExample from "./app/components/svg";
import PanResponderEx from "./app/components/PanResponderEx";
//import Controls from './Controls';
//import ExpoPixi from "expo-pixi";
//import { PIXI } from "expo-pixi";
import TouchComponent from "./app/components/TouchComponent";
import Whiteboard from "./app/components/Whiteboard";
//import Expo2d from "./app/components/Expo2d";

export default function App() {
  return <CameraScreen />;
}

//<RNDrawOnScreen penColor={"#000"} strokeWidth={20} />
