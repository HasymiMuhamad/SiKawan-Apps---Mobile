import React, { Component } from 'react'
import { Text, StyleSheet,} from 'react-native'
import {Container,View} from 'native-base'

const Kehadiran=({color})=>{
    return(
    <View style={{
            alignItems: 'center', 
            flex: 2, 
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 50,
            justifyContent: 'center',
            backgroundColor: color, 
        }}>
        <Text style={{color:'white', fontSize:20}}> 0 </Text>
    </View>
    )
}

export {Kehadiran}