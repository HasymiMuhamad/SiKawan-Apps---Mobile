import React, { Component } from 'react'
import { styles, login } from '../Style/Style'
import axios from 'axios'
import { Text, View, TouchableOpacity, TextInput, ScrollView, Image, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Home from '../Home/Home';
import Loader from './Loader'

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            email : '',
            token : '',
            loading: false,
        }
    }

    login = () => {
        console.log("Login");
        this.setState({
            loading:true,
        })
        
          const requestBody = {
            username : '000000000000000100',
            // username: this.state.username,
            // password: this.state.password,
            password : 'NKk6x5',
          }
          axios.post("https://sikawankawan.herokuapp.com/login",
        //   requestBody)

        //   axios.post("http://192.168.100.10:8080/login",
          requestBody)
          
          .then((result) => {
              let user = result.data.data.token
              AsyncStorage.setItem('user',user);
              console.log(result.data.data.token);
              this.setState({loading:false})
              this.props.navigation.navigate('Dashboard')
              console.log('okokok')
          })
          .catch((error) =>{
            console.log("error");
            ToastAndroid.show('Password Salah', ToastAndroid.LONG);


          })
        
        };


  render() {
      console.log("login");
      
    return (

    <View style = { styles.container }>
    <Loader loading={this.state.loading}/>

        <ScrollView>
        <View style = { login.containerImage }>
            <Image style = { login.image } source = { require ( '../../img/Logo.png' ) } />
        </View>

        
        <View style = { login.containerForm }>

            <View style = { login.containerTeks }>
                <Text style = { login.teksHeader }>
                    SiKawan
                </Text>

                <Text style = { login.teksKeterangan }>
                    Please Login using NISN number and Password given by school
                </Text>
            </View>

            <View style = { login.containerForm }>
                <View style = { login.form }>
                    <Text>
                        NISN : 
                    </Text>

                    <TextInput style = { login.nisn } placeholder = 'NISN'
                    onChangeText = { (username) => this.setState({username}) }/>

                    <Text>
                        Password : 
                    </Text>

                    <TextInput style = { login.password } secureTextEntry placeholder = 'Password'
                    onChangeText = { (password) => this.setState({password}) }/>

                </View>
            </View>
        </View>
        </ScrollView>

        <TouchableOpacity style = { login.button } onPress={()=>this.login()}>
            <Text style = {{ fontSize: 24, color: 'white' }}> 
                LOGIN 
            </Text>
        </TouchableOpacity>

    </View>

    )
  }
}
