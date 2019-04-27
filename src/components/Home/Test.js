import React, { Component } from 'react'
import LineChart from 'react-native-responsive-linechart'
import { Text, View } from 'react-native'

const data = [-10, -15, 40, 19, 32, 15, 52, 55, 20, 60, 78, 42, 56];
const config = {
  line: {
    visible: true,
    strokeWidth: 1,
    strokeColor: "#54a0ff"
  },
  area: {
    visible: false
  },
  yAxis: {
    labelColor: "#54a0ff"
  },
  interpolation: "spline",
  insetY: 10,
  insetX: 10
};

export default class Test extends Component {

  render() {
    return (

      <View style ={{flex: 1}}>
        <LineChart style={{ flex: 1 }} config={config} data={data} />
      </View>
    )
  }
}





 
