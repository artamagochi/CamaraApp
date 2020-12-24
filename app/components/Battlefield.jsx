import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export class Battlefield extends Component {
  constructor(props) {
    super(props);
  }

  // The event 'ev' is of type 'GestureResponderEvent'. Documentation for ev.nativeEvent:
  // https://facebook.github.io/react-native/docs/gesture-responder-system.html
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
        style={styles.container}
        onStartShouldSetResponder={(ev) => true}
        // onMoveShouldSetResponder={(ev) => false}
        onResponderGrant={this.onTouchEvent.bind(this, "onResponderGrant")}
        // onResponderReject={this.onTouchEvent.bind(this, "onResponderReject")}
        onResponderMove={this.onTouchEvent.bind(this, "onResponderMove")}
        // onResponderRelease={this.onTouchEvent.bind(this, "onResponderRelease")}
        // onResponderTerminationRequest={(ev) => true}
        // onResponderTerminate={this.onTouchEvent.bind(this, "onResponderTerminate")}
      >
        <Text>Click me</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "orange",
  },
});
