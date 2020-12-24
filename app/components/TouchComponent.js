import {
  TapGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";

class TouchComponent extends Component {
  render() {
    return (
      <TapGestureHandler>
        <RotationGestureHandler>...</RotationGestureHandler>
      </TapGestureHandler>
    );
  }
}
