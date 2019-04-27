import React, { Component } from "react";
import {Text, Image,ScrollView, Dimensions } from "react-native";
// import DataRow from "./DataRow";
import AnimatedBar from "./AnimatedBar";
import { createAnimatableComponent, View } from 'react-native-animatable';


export default class BigCard extends Component {
  render() {
    const { image, title, data } = this.props;
    console.log(this.props);
    let lebar = Dimensions.get('window').width-60    
    return (
      <ScrollView style={{flex:1}}>
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.navigation.state.params.category}</Text>
          </View>
        </View>
        {this.props.navigation.state.params.nilai.map(function(item,index){
            // if(item.category=="uas"){
            console.log(item.subjects);
          return(
          // <View >
          <View style={{margin:10, borderWidth:1, padding:10}} animation="fadeIn" useNativeDriver duration={4000} key={index}>
            <View>
              <View>
                <Text style={{fontSize:16}}>Mata Pelajaran: {item.item.subjects.name.toUpperCase()}</Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={{fontSize:16}}>Tanggal: {item.item.createdAt.slice(0,10)}</Text>
              </View>
            </View>
            <View>
              <View>
                <Text style={{fontSize:16}}>Nilai: {item.item.point}</Text>
                {/* <View style={{borderWidth:1, borderRadius:5,}}> */}
                  <View style={{borderWidth:0.5,margin:5,width:lebar,borderRadius:30}}>
                    <AnimatedBar value={item.item.point} index={5} />
                  </View>
                {/* </View> */}
              </View>
            </View>
          </View>  
          // </View>
          )}
        // }
        )
        }
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  title: {
    marginTop:10,
    fontSize: 25,
    fontWeight: "bold"
  },
};
