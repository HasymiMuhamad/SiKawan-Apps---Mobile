import React, { Component } from 'react'
import axios from 'axios'
import { View } from 'react-native-animatable'
import { Picker, Text, TouchableOpacity,FlatList,ActivityIndicator, ScrollView, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles, nilai } from '../Style/Style'

export default class Nilai extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        nilai : [],
        loading : true,
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
          this.setState({nilai : result.data.data.score.details,loading:false})
        })
      }
      });
}



  render() {
  const {loading}=this.state
    // console.log(this.props);

  if(!this.state.loading){
  return(
  // <ScrollView>
  <View style = { styles.container }>

    <View style = { nilai.containerdata }>

      {/* <View style = { nilai.containerdata1 }> */}
      <View animation="bounceIn" useNativeDriver duration={800}>
        <SafeAreaView>
          <View style = { nilai.quiz }>
            <TouchableOpacity style = { nilai.button } 
                onPress = {()=>this.props.navigation.navigate('Details',
                {nilai:this.state.nilai.filter(item => {return item.category === "quiz"}).map(function(item){
                return {item}
                }),category:"Kuis"})}>
              <Icons name="folder-account-outline" size={50} color="black" header={null}/>
              <Text style = { nilai.tekstittle }> Quiz </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      <View animation="bounceIn" useNativeDriver duration={1200}>
        <SafeAreaView>
          <View style = { nilai.assignment }>
            <TouchableOpacity style = { nilai.button }
                onPress={()=>this.props.navigation.navigate('Details',
                {nilai:this.state.nilai.filter(item => {return item.category === "assignment"}).map(function(item){
                return {item}
                }),category:"Tugas"})}>
              <Icons name="folder-account-outline" size={50} color="black" header={null}/>
              <Text style = { nilai.tekstittle }> Assignment </Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
      </View>
        {/* </View> */}

        {/* <View style = { nilai.containerdata2 }> */}
        <View animation="bounceIn" useNativeDriver duration={1600}>
          <SafeAreaView>
          <View style = { nilai.midterm }>
            <TouchableOpacity style = { nilai.button }
                onPress={()=>this.props.navigation.navigate('Details',
                {nilai:this.state.nilai.filter(item => {return item.category === "uts"}).map(function(item){
                return {item}
                }),category:"Ujian Tengah Semester"})}>
              <Icons name="folder-account-outline" size={50} color="black" header={null}/>
            <View style={{alignItems:"center"}}>
              <Text style = { nilai.tekstittle }> Midterm Exam </Text>
              {/* <Text style={{fontSize: 20}}> Exam </Text> */}
            </View>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
      </View>

      <View animation="bounceIn" useNativeDriver duration={2000}>
          <SafeAreaView>
          <View style = { nilai.final }>
            <TouchableOpacity style = { nilai.button }
                onPress={()=>this.props.navigation.navigate('Details',
                {nilai:this.state.nilai.filter(item => {return item.category === "uas"}).map(function(item){
                return {item}
                }),category:"Ujian Akhir Sekolah"})}>
              <Icons name="folder-account-outline" size={50} color="black" header={null}/>
              <View style={{alignItems:"center"}}>
          <Text style = { nilai.tekstittle }> Final Exam</Text>
          {/* <Text style={{fontSize: 20}}> Akhir </Text> */}
          {/* <Text style={{fontSize: 20}}> Exam </Text> */}
          </View>
          </TouchableOpacity>
          </View>
          </SafeAreaView>
      </View>
        {/* </View> */}

      </View>
    </View>
    // </ScrollView>
  )
  } else {
    return (
      <View>
      <ActivityIndicator size="large" color="blue"/>
      </View>
    )
  }
    
  }
}
