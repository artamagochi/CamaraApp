import React, { useState, useEffect } from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import CameraScreen from "./app/screens/CameraScreen";
//import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import RNDrawOnScreen from "react-native-draw-on-screen";
import { Battlefield } from "./app/components/Battlefield";
import SvgExample from "./app/components/svg";
import touchPath from "./app/components/touchPath";
//import Controls from './Controls';

export default function App() {
  return <TouchComponent />;
}

//<RNDrawOnScreen penColor={"#000"} strokeWidth={20} />
