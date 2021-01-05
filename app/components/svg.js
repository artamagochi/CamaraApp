import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  SvgUri,
} from "react-native-svg";

/* Use this if you are using Expo
  import * as Svg from 'react-native-svg';
  const { Circle, Rect } = Svg;
  */

import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class SvgExample extends React.Component {
  state = {
    touch: "109 100",
  };

  onTouchEvent(name, ev) {
    console.log(
      `[${name}] ` +
        `root_x: ${ev.nativeEvent.pageX}, root_y: ${ev.nativeEvent.pageY} ` +
        `target_x: ${ev.nativeEvent.locationX}, target_y: ${ev.nativeEvent.locationY} ` +
        `target: ${ev.nativeEvent.target}`
    );
  }

  render() {
    return (
      <View
        onStartShouldSetResponder={(ev) => true}
        //onMoveShouldSetResponder={(ev) => false}
        onResponderGrant={this.onTouchEvent.bind(this, "onResponderGrant")}
        //onResponderReject={this.onTouchEvent.bind(this, "onResponderReject")}
        onResponderMove={this.onTouchEvent.bind(this, "onResponderMove")}
        onResponderRelease={this.onTouchEvent.bind(this, "onResponderRelease")}
        //onResponderTerminationRequest={(ev) => true}
        //onResponderTerminate={this.onTouchEvent.bind(this, "onResponderTerminate")}
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
          backgroundColor: "tomato",
        }}
      >
        <ImageBackground
          source={image}
          style={{
            image: {
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
            },
          }}
        >
          <Svg height="400" width="400">
            <Polyline
              points="0 0,100 100, 200, 200"
              fill="none"
              stroke="white"
              strokeWidth="3"
            />
          </Svg>
        </ImageBackground>
      </View>
    );
  }
}
