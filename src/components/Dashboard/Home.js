import React, { Component } from 'react'
import { Image, StyleSheet, SafeAreaView, AsyncStorage } from 'react-native'
import {Content,Container, CardItem,} from 'native-base'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';

export default class Home extends Component {
  render() {
    return (
    <View style={{flex:1,}}>
      <View style={{
          borderWidth:1,
          height:"20%",
          backgroundColor:"skyblue"
          }}>
          <View style={{
              alignItems:"center",
              flex:1,
          }}>
                <Image source={require('../../img/IMG_7480.jpg')} style={{
                    borderRadius:50,
                    borderColor:"white",
                    borderWidth:1,
                    width:100,
                    height:100,
                    marginTop:5,
                }}/>
          </View>
          <View style={{
              flexDirection:"row",
              justifyContent:"space-around",
              alignItems:"center",
              flex:1,
          }}>
              <Text> Nama </Text>
              <Text> Kelas </Text>
          </View>
      </View>
      <View style={{
          borderWidth:1,
          margin:10,
          borderRadius:10,
          height:"20%",
      }}>
        <View style={{
            flexDirection:"row",
            justifyContent: "space-around",
            alignItems:"center",
            flex:1,
        }}>
            <View style={{
                borderRadius:50,
                borderWidth:1,
                height:80,
                width:80,
                borderColor:"#009fff",
                backgroundColor: "#009fff",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:20,
                }}>0</Text>  
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:16,
                }}>Hadir</Text>  
            </View>
            <View style={{
                borderRadius:50,
                borderWidth:1,
                height:80,
                width:80,
                borderColor:"#ff9d00",
                backgroundColor: "#ff9d00",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:20,
                }}>0</Text>  
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:15,
                }}>Tidak Penuh</Text>  
            </View>
            <View style={{
                borderRadius:50,
                borderWidth:1,
                height:80,
                width:80,
                borderColor:"#27a003",
                backgroundColor: "#27a003",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:20,
                }}>0</Text>  
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:16,
                }}>Sakit</Text>  
            </View>
            <View style={{
                borderRadius:50,
                borderWidth:1,
                height:80,
                width:80,
                borderColor:"#d30000",
                backgroundColor: "#d30000",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:20,
                }}>0</Text>  
                <Text style={{
                    color:"white",
                    fontWeight:"bold",
                    fontSize:14,
                }}>Tidak Hadir</Text>  
            </View>
        </View>
      </View>
    </View>
    )
  }
}
