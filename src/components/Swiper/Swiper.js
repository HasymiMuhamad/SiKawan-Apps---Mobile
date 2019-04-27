import React, { Component } from 'react';
import Swiper from 'react-native-swiper'
import { Text, View, Image, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export const styles = StyleSheet.create ({
    
  wrapper: {
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image : {
    height: '100%',
    width: '100%',
  },

  teksLogin : {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontSize: 24,
  },

})

export default class Swipers extends Component {

  componentDidMount() {
    SplashScreen.hide();
}

  render() {
    // console.log(this.props)
    return (

        <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
              <Image style = { styles.image } source = { require ( '../../img/s1.jpg' ) } />
            </View>
            <View style={styles.slide2}>
              <Image style = { styles.image } source = { require ( '../../img/s2.jpg' ) } />
            </View>
            <View style={styles.slide3}>
              <Image style = { styles.image } source = { require ( '../../img/s3.jpg' ) } />
              <Text style = { styles.teksLogin } onPress = { ()=>{this.props.navigation.navigate('Login')}}> LOGIN </Text>

            </View>
        </Swiper>

    );
  }
}
