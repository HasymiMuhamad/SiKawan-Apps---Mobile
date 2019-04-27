import React, { Component } from 'react'
import { View } from 'react-native-animatable'
import { styles, keluhan } from '../Style/Style'
import { Image,Text, TextInput, TouchableOpacity, SafeAreaView, ToastAndroid,Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import ImagePicker from 'react-native-image-picker'

export default class Keluhan extends Component {

  constructor(props){
    super(props);
    this.state = {
        text:'',
        photo:null,
        photoSend:[],
    }
}

  post=()=>{
    console.log(this.state);

    if(this.state.text==""){
      Alert.alert("Your Text is Empty")
    } else {
    
    AsyncStorage.getItem('user', (error, result) => {
      console.log(this.state)
      
      if (result) {
        var bodyFormData = new FormData();
        bodyFormData.append('complaint', `${this.state.text}`);
        bodyFormData.append('image', {uri:`${this.state.photoSend.uri}`,type:`${this.state.photoSend.type}`,name:`${this.state.photoSend.fileName}`});
        console.log();
        

  //   axios.post('https://sikawankawan.herokuapp.com/student/complaint', {
  //     complaint: this.state.text,
  //     image: this.state.photoSend,
      
    // },{headers: {
    //   "Authorization" : result,
    //   "Content-Type" : "multipart/form-data"
    // }
    
  // })
  axios({
    method: 'post',
    url: 'https://sikawankawan.herokuapp.com/student/complaint',
    data: bodyFormData,
    headers: {
      "Authorization" : result,
      'Content-Type': 'multipart/form-data' }
    })
    .then((response) => {
      this.props.navigation.navigate('Keluhan')
      ToastAndroid.show('Terima kasih, Keluhan anda telah diterima', ToastAndroid.LONG);
      console.log("sukses");
      
    })
    .catch((error) =>{
      console.log("error");
    });
  }
  })
}
}
handleChoosePhoto = () => {
  const options = {
    noData: true,
  }
  
  
  ImagePicker.launchImageLibrary(options, response => {
    if (response.uri) {
      console.log(response);
      
      this.setState({ photo: response,photoSend:response })
    }
  })
}

  render() {
    // console.log(this.props);
    
    return (

      <View style = { styles.container }>
        
        <View style = { keluhan.form }>
          
          <View style = { keluhan.form1 }>
            <View animation="bounceIn" useNativeDriver duration={800}>
              <SafeAreaView>
                <Text style = { keluhan.teks }> 
                    Keluhan anda akan sampai ke dinas dan pihak sekolah 
                </Text>
              </SafeAreaView>
            </View>
          </View>
          
          <View style = { keluhan.form2 }>
            <View animation="bounceIn" useNativeDriver duration={800}>
              <SafeAreaView>
                <View>
                  <View style = { keluhan.kotakImage }>
                    {this.state.photo && (
                      <Image
                        source={{ uri: this.state.photo.uri }}
                        style={{ width: 300, height: 300 }}
                      />
                    )}
                    <TouchableOpacity onPress={this.handleChoosePhoto}>
                    <Text>Choose Photo</Text></TouchableOpacity>
                  </View>
                </View>
              </SafeAreaView>
            </View>
          </View>
            
          
          <View style = { keluhan.form3 }>
            {/* <View animation="bounceIn" useNativeDriver duration={800}> */}
              {/* <SafeAreaView> */}
                <Text style = { keluhan.teks }> Tulis keluhan </Text>
                <TextInput style = { keluhan.inputTeks } placeholder = 'Komplain Keluhan' onChangeText = { (text) => this.setState({text}) }/>
              {/* </SafeAreaView> */}
            {/* </View> */}
          </View>

        </View>

        <TouchableOpacity style = { keluhan.button } 
          onPress={()=>
            Alert.alert('Confirm',
            'Do you want to post complaint?',
            [
                {text:'Cancel',onPress:()=>{return null}},
                {text:'Confirm',onPress:()=>{this.post()}}
            ],
            {cancelable:false}
          )}>
            <Text style = {{ fontSize: 24, color: 'white' }}> 
                Lapor Keluhan
            </Text>
        </TouchableOpacity>

      </View>
    )
  }
}
