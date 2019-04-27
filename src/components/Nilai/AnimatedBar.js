import React, { Component } from "react";
import { View,Animated, Dimensions } from "react-native";

export default class AnimatedBar extends Component {
  constructor(props) {
    super(props);
    this.width = new Animated.Value(0);
  }
  componentDidMount() {
    this.animateBar();
  }

  componentDidUpdate() {
    this.animateBar();
  }
  
  animateBar = () => {
    // let deviceWidth = Dimensions.get('window').width
    let deviceWidth = (Dimensions.get('window').width-60)/100
    console.log(deviceWidth);
    const { value, index } = this.props;
    this.width.setValue(0); // initialize the animated value
    Animated.timing(this.width, {
      toValue: value*deviceWidth,
      delay: index * 150 // how long to wait before actually starting the animation
    }).start();
  };
  render() {
    let widthStyle = { width: this.props.value };
    let barWidth = {
      width: this.width
    };

    return <Animated.View style={[styles.bar, barWidth]} />;
  }
}

const styles = {
  bar: {
    height: 15,
    borderColor: "green",
    backgroundColor: "green",
    borderRadius: 30,
  },
  statusRow: {
    flex: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5
  },
  statusLabel: {
    flex: 3,
    alignSelf: "flex-start"
  },
  statusLabelText: {
    fontWeight: "bold",
    color: "green"
  },
  statusValue: {
    flex: 2
  },
  statusValueText: {
    color: "#404040"
  },
  statusBar: {
    flex: 5
  }
};
