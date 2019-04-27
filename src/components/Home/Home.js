import React, { Component } from 'react'
import { Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import AnimatedBar from "../Nilai/AnimatedBar";
import { styles, home} from '../Style/Style'
// import SplashScreen from 'react-native-splash-screen'

export default class Home extends Component {

constructor(props){
    super(props);
    this.state = {
        nilai : [],
        loading : true,
        nama: "",
        kelas:"",
        address:"",
    }

}
  componentDidMount() {

    AsyncStorage.getItem('user', (error, result) => {

      if (result) {
        axios.get(
          "https://sikawankawan.herokuapp.com/student",
          // "http://192.168.100.10:8080/student",
          {headers: {
              "Authorization" : result
            }
          }
        )
        
          .then((result) => {
            // console.log(result.data.data.fullname);
            this.setState({
                nilai : result.data.data.score.details,
                nama : result.data.data.fullname,
                kelas : result.data.data.kelas.fullname,
                address : result.data.data.address,
                loading: false,
                parent : result.data.data.parent,
            })
          })
        }
        });
  }

  render() {
  
    let lebar = Dimensions.get('window').width-60
    if (!this.state.loading){
    return (
      <View style = { home.container }>
      
      <View style = { home.containerprofil }>
        <View animation="bounceIn" useNativeDriver duration={800}>
          <SafeAreaView>
            <View style = { home.containeriamge }>
              <Image source={require('../../img/a.jpg')} style= { home.imageprofil }/>
            </View>
          </SafeAreaView>
        </View>

        <View style = { home.containerteksnama }>
          <View animation="bounceIn" useNativeDriver duration={1100}>
            <SafeAreaView>
              <Text style = { home.teksprofil }> Name </Text>
            </SafeAreaView>
          </View>
          <View animation="bounceIn" useNativeDriver duration={1700}>
            <SafeAreaView>
              <Text style = { home.teksprofil }> Class </Text>
            </SafeAreaView>
          </View>
          <View animation="bounceIn" useNativeDriver duration={2300}>
            <SafeAreaView>
              <Text style = { home.teksprofil }> Parent </Text>
            </SafeAreaView>
          </View>
        </View>
        
        <View style = { home.containertekskelas }>
          <View animation="bounceIn" useNativeDriver duration={1400}>
            <SafeAreaView>
              <Text style = { home.teksprofil }> : { this.state.nama } </Text>
            </SafeAreaView>
          </View>
          <View animation="bounceIn" useNativeDriver duration={2000}>
            <SafeAreaView>
              <Text style = { home.teksprofil }> : { this.state.kelas } </Text>
            </SafeAreaView>
          </View>
          <View animation="bounceIn" useNativeDriver duration={2600}>
            <SafeAreaView>
              <Text style = { home.teksprofil }> : { this.state.parent } </Text>
            </SafeAreaView>
          </View>
        </View>

      </View>

      <View style = { home.containerkehadiran }>
        <View animation="bounceIn" useNativeDriver duration={800}>
          <SafeAreaView>
            <Text style = { home.tekskehadiran }> Attendance </Text>
          </SafeAreaView>
        </View>

        <View style = { home.containerkethadir }>
          <View style = { home.hadir }>
            <View animation="bounceIn" useNativeDriver duration={1100}>
              <SafeAreaView>
                <Text style = { home.angkahadir }> 0 </Text>
              </SafeAreaView>
            </View>
            <View animation="bounceIn" useNativeDriver duration={2000}>
              <SafeAreaView>
                <Text style = { home.tekshadir }> Attend </Text> 
              </SafeAreaView>
            </View>   
          </View>

          <View style = { home.sakit }>
            <View animation="bounceIn" useNativeDriver duration={1400}>
              <SafeAreaView>
                <Text style = { home.angkasakit }> 0 </Text> 
              </SafeAreaView>
            </View>
            <View animation="bounceIn" useNativeDriver duration={2300}>
              <SafeAreaView>
                <Text style = { home.tekssakit }> Sick </Text>  
              </SafeAreaView>
            </View>
          </View>

          <View style = { home.alpa }>
            <View animation="bounceIn" useNativeDriver duration={1700}>
              <SafeAreaView>
                <Text style = { home.angkaalpa }> 0 </Text>   
              </SafeAreaView>
            </View>
            <View animation="bounceIn" useNativeDriver duration={2600}>
              <SafeAreaView>
                <Text style= { home.teksalpa }> Absent </Text> 
              </SafeAreaView>
            </View> 
          </View>
        </View>
      </View>

      <View style = { home.containernilai }>
        <View animation="bounceIn" useNativeDriver duration={800}>
          <SafeAreaView>
            <Text style = { home.judulnilai }> Scores </Text>
          </SafeAreaView>
        </View>

        <ScrollView style = { home.scroll }>

          {this.state.nilai.sort(function(a,b){
            let dateA=new Date(a.createdAt),dateB=new Date(b.createdAt)
            return dateB-dateA;
          })
          
          .slice(0,5).map(function(item,index){

          return(
          <View style = { home.containerfungnilai } key = { index }>
            <View>
              <View>
                <Text> Schedule: {item.subjects.name.toUpperCase()} </Text>
              </View>
            </View>

            <View>
              <View>
                <Text> Date: {item.createdAt.slice(0,10)} </Text>
              </View>
            </View>

            <View>
              <View>
                <Text> Score: {item.point} </Text>
                <View style={{borderWidth:0.5,margin:5,width:lebar,borderRadius:30}}>
                  <AnimatedBar value={item.point} index={1} />
                </View>
              </View>
            </View>
          </View>  
          )})}

        </ScrollView>
      </View>
    </View>

    )} else {
      return(

      <View>
        <ActivityIndicator size="large" color="blue"/>
      </View>

      )
    }
  }
}
