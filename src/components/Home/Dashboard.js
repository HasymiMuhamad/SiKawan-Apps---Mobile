import React, { Component } from 'react'
import { Image, StyleSheet, SafeAreaView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {Content,Container, CardItem,} from 'native-base'
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import {Kehadiran} from './helper'
import axios from 'axios'
// import * as Animatable from 'react-native-animatable';

// MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);


export default class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
        nilai : [],
        loading : true,
        email : '',
        token : '',
        nama :'',
    }

}
  componentDidMount() {

    AsyncStorage.getItem('user', (error, result) => {

      if (result) {
        axios.get(
          "https://sikawankawan.herokuapp.com/student",
          // "http://192.168.100.10:8080/student",
          {headers: {
              // "Authorization" : `${this.props.navigation.state.params.token}`
              "Authorization" : result
    
            }
          }
        )
        
          .then((result) => {
            // console.log(result.data.data.fullname);
            this.setState({nama : result.data.data.fullname})
          })
        }
        });
  }

  render() {
    console.log(this.props)
    return (
      <Container>
        <View style={{    
          alignItems:'flex-start', 
          height: 130, 
          justifyContent: "center",
          flex:1,
          borderWidth: 1,
          backgroundColor: '#87CEEB',
          borderColor: '#87CEEB',
          borderRadius: 10,
          margin: 5,}}>
          <View animation="bounceInRight" useNativeDriver duration={5000}>
          <SafeAreaView>
            <View style={styles.container2}>
              <View style={styles.container3}>
                <Image source={require('../../img/a.jpg')} style={styles.imageRound}/>
              </View>
              <View style={styles.container4}>
                <Text style={styles.text}>{this.state.nama.toUpperCase()}</Text>
                <Text style={styles.text}>Nama Sekolah</Text>
              </View>
            </View>
            <View style={styles.container5}>
              <Text>Kehadiran Hari Ini: </Text>
            </View>
            </SafeAreaView>
            </View>
          </View>
        <View style={{borderWidth:1,flex:1,height:"50%",margin:5, borderRadius:5, borderColor:"gray",}}>
          <View style={styles.container6}>
                <Text style={styles.text}> Kehadiran Pekan Ini: </Text>
          </View>
          <View style={{flexDirection:'row', flex: 1}}>
            <View animation="bounceInRight" useNativeDriver duration={5000}>
              <View style={{
                  alignItems: 'center', 
                  flex: 1, 
                  marginLeft: 5,
                  marginRight: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: "#009fff", }}>
                <Text style={{color:'white', fontSize:20}}> 0 </Text>
              </View>
              <View style={{    
                  alignItems: 'center', 
                  marginLeft: 5,
                  marginRight: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: '#009fff'}}>
                <Text style={{fontSize:14}}> Hadir Penuh </Text>
            </View>
          </View>
          <View animation="bounceInDown" useNativeDriver duration={5000}>
              {/* <Kehadiran color="#ff9d00"/> */}
              <View style={{
                  alignItems: 'center', 
                  flex: 1, 
                  marginLeft: 5,
                  marginRight: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: "#ff9d00", }}>
                <Text style={{color:'white', fontSize:20}}> 0 </Text>
              </View>
              <View style={{    
                  alignItems: 'center',  
                  marginLeft: 5,
                  marginRight: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: '#009fff'}}>
                  <Text style={{fontSize:14}}> Tidak Penuh </Text>
              </View>
            </View>
        <View animation="bounceInUp" useNativeDriver duration={5000}>
              {/* <Kehadiran color="#27a003"/> */}
              <View style={{
                  alignItems: 'center', 
                  flex: 1, 
                  marginLeft: 5,
                  marginRight: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: "#27a003", }}>
                <Text style={{color:'white', fontSize:20}}> 0 </Text>
              </View>
              <View style={{    alignItems: 'center', 
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 50,
                        justifyContent: 'center',
                        backgroundColor: '#009fff'}}>
                  <Text style={{fontSize:14}}> Sakit/Izin </Text>
              </View>
            </View>
        <View animation="bounceInLeft" useNativeDriver duration={5000}>
            {/* <View style={{height:100,}}>             */}
              {/* <Kehadiran color="#d30000"/> */}
              <View style={{
                  alignItems: 'center', 
                  // flex: 3, 
                  flex:1,
                  marginLeft: 5,
                  marginRight: 5,
                  borderRadius: 50,
                  justifyContent: 'center',
                  backgroundColor: "#d30000", }}>
                <Text style={{color:'white', fontSize:20}}> 0 </Text>
              </View>
              <View style={{    alignItems: 'center', 
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 50,
                        justifyContent: 'center',
                        backgroundColor: '#009fff'}}>
                  <Text style={{fontSize:14}}> Alpha </Text>
              {/* </View> */}
            </View>
            </View>
          </View>
        </View>
        <View style={{justifyContent:"flex-start", alignItems: "flex-start", marginLeft: 5, marginTop:5,height: 20,flex: 0}}>
              <Text style={styles.text}>Nilai Pekan Ini</Text>
          </View>
          <View style={{borderWidth:1,margin:5, borderRadius:10}}>
            <Text></Text>
          </View>

      </Container>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 20
  },
  container:{
    alignItems:'flex-start', 
    height: 130, 
    justifyContent: "center",
    flex:1,
    // borderWidth: 1,
    backgroundColor: '#87CEEB',
    borderColor: '#87CEEB',
    borderRadius: 10,
    margin: 5,
    },
  container2:{
    backgroundColor:null,
    flexDirection:'row',
    flex: 0,
    height: 100,
  },
  container3:{
    backgroundColor:null,
    justifyContent:'center',
    alignItems:'center',
    flex:0,
    height: 100,
    marginRight: 20,
    marginLeft: 20,
  },
  container4:{
    backgroundColor:null,
    flex:0,
    height: 100,
    justifyContent:'center',
    alignItems: 'center',
  },
  container5:{
    flex:1,
    backgroundColor:null, 
    height:1, 
    justifyContent:"center",
    alignItems: 'center',
    marginLeft: 20,
  },
  container6:{
    flex:0,
    height:20, 
    marginLeft: 20, 
    marginRight: 20,
    marginBottom:10,
    marginTop:10,
  },
  containerkehadiran:{
    alignItems: 'center', 
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#009fff'
  },
  containerkehadirantext:{
    alignItems: 'center', 
    height: 50, 
    justifyContent: 'center',
    flex:1
    },
  imageRound:{
    height:70, 
    width:70, 
    borderRadius:50, 
    borderWidth:1,
    borderColor:'white',
  },

})