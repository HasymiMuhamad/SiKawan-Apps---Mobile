import React, { Component } from 'react'
import { styles, keluhan } from '../Style/Style'
import { View } from 'react-native-animatable'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'

export default class Landing extends Component {
  
    render() {
    return (

      <View style = { styles.container }>
        
        <View style = { keluhan.containerpostget }>

            <View style = { keluhan.contbutton }>
                {/* <Text style = { keluhan.tekspostget }> 
                    Post keluhan anda di sini 
                </Text> */}
                <View animation="bounceIn" useNativeDriver duration={800}>
                    <SafeAreaView>
                        <TouchableOpacity 
                            style = { keluhan.post } 
                            onPress = { ()=>{this.props.navigation.navigate('postKeluhan')}} > 
                            <Text style = {{ color: 'white' }}> Post Complaint </Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
            </View>
            <View style = { keluhan.contbutton }>
                {/* <Text style = { keluhan.tekspostget }> 
                    Hasil balasan keluhan 
                </Text> */}
                <View animation="bounceIn" useNativeDriver duration={800}>
                    <SafeAreaView>
                        <TouchableOpacity 
                            style = { keluhan.post }
                            onPress = { ()=>{this.props.navigation.navigate('showKeluhan')}}>
                            <Text style = {{ color: 'white' }}> Show Complaints </Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
            </View>
        </View>

      </View>
    )
  }
}
