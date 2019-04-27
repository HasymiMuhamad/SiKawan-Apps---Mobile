import React, { Component } from 'react'
import axios from 'axios'
import { View } from 'react-native-animatable'
import { styles, post } from '../Style/Style'
import { Text,TouchableHighlight, TouchableOpacity, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Lightbox from 'react-native-lightbox';
import Loader from './Loader'

export default class Show extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       keluhan : [],
       loading:false,
       image:null,
    }
  }
  

  componentDidMount() {

    AsyncStorage.getItem('user', (error, result) => {

      if (result) {
        axios.get(
          'https://sikawankawan.herokuapp.com/student',
          // "http://192.168.100.10:8080/student",
          {headers: {
              "Authorization" : result
    
            }
          }
        )
        
          .then((result) => {
            console.log(result);
            
            this.setState({keluhan : result.data.data.complaint})
            
          })
        }
        });
  }


  login = () => {
    // console.log("Login");
    // this.setState({
    //     loading:true,
    //     image:item.image
    // })
  }

  toggleMyModal = () => {
    if(this.myModal){
      this.myModal.toggleModal();
    }
  }
  render() {
    return (

      <View style = { styles.container }>
        
        <View style = { post.containerImage }>
       

          <ScrollView>
          <View style = { post.keluhan }>

          {this.state.keluhan.map((item,index)=>{
            return (
              <View style={{borderWidth:1,padding:10,margin:10,borderRadius:5}} key={index}>
            <View style={{padding:10,marginRight:10,marginLeft:10,}}>
            <Text>Yours complaint:</Text>
            <Text>{item.complaint}</Text>
            </View>
            <View style={{padding:10,marginRight:10,marginLeft:10,alignItems:"center"}}>
            <Text>Image:</Text>
             <TouchableOpacity onPress={()=>this.setState({loading:true,image:`${item.image}`})}><Image style={{height:200,width:200}} source={{uri:`${item.image}`}}/></TouchableOpacity>
            </View>
          
            <View style={{padding:10,marginRight:10,marginLeft:10}}>
            <Text>Response from school:</Text>
            {item.responseSchool?<Text>{item.responseSchool}</Text>:<Text style={{color:"red",fontStyle:"italic"}}>Your complaint have not responsed yet from the school</Text>}
            </View>
            </View>

            )
          })}   

        </View>
        </ScrollView>

      </View>
      </View>

    )
  }
}
