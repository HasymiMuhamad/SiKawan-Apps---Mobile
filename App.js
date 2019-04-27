import React, { Component } from 'react'
import Login from './src/components/Login/Login'
import Presensi from './src/components/Presensi/Presensi'
import { Router, Scene } from 'react-native-router-flux'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'


export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
}

  render() {
    return (

      
      
          <Router>
            <Scene  hideNavBar = 'true' key ="root">
              <Scene key = 'login' component = { Login } title = 'Login' />
              <Scene key = 'presensi' component = { Presensi } title = 'Presensi' />
            </Scene>
          </Router>

    )
  }
}
