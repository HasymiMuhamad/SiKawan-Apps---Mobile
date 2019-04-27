import { 
    createSwitchNavigator, 
    createDrawerNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
    DrawerItems,
    SafeAreaView
  } from 'react-navigation'
import Login from '../Login/Login'
import Presensi from '../Presensi/Presensi'
import Nilai from '../Nilai/Nilai'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Swiper from '../Swiper/Swiper'
import {View,Text,Image,TouchableOpacity,Alert} from 'react-native'

const PresensiStack=createStackNavigator({
    Presensi:{
        screen:Presensi,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:"Presensi Kehadiran",
                headerLeft:(
                    <Ionicons style={{paddingLeft:20}}
                    onPress={()=>navigation.openDrawer()}
                    name="md-menu" size={30}/>
                )
            }
        }
    }
})

const NilaiStack=createStackNavigator({
    Nilai:{
        screen:Nilai,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:"Nilai",
                headerLeft:(
                    <Ionicons style={{paddingLeft:20}}
                    onPress={()=>navigation.openDrawer()}
                    name="md-menu" size={30}/>
                )
            }
        }
    }
})

const BottomTabNavigator=createBottomTabNavigator({
    // Dashboard:DashboardStack,
    Nilai:NilaiStack,
    Presensi:PresensiStack
},{
    defaultNavigationOptions:({navigation})=>
    ({
        tabBarIcon:({focused,tintColor})=>{
          const { routeName } = navigation.state;
            let iconName
            if (routeName==='Presensi'){
                iconName=`home${focused?'-account':'-outline'}`
            }
             else if (routeName==='Nilai'){
              iconName = `${focused?'chart-areaspline':'chart-bar'}`
            } 
            // else if (routeName==='Presensi'){
            //     iconName= `${focused?'calendar-multiple-check':'calendar'}`
            // }
            return <Icons name={iconName} size={30} color={tintColor} header={null}/>
        }
    })
  }
)


const DrawerNavigator=createDrawerNavigator({
    Beranda:BottomTabNavigator
},
{
    contentComponent:(props)=>(
        <View>
          <View>
              <View style={{
                  backgroundColor: 'grey',
                  height:140,
                  alignItems: 'center',
                  justifyContent: 'center',
              }}>
                  <Image source={require('../../img/1.jpg')} style={{
                      height: 100, 
                      width: 100, 
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: 'white'
                  }}/>
                      <Text style={{color:'white', fontSize: 30}}>
                      Rangga
                      </Text>
              </View>
          </View>
          <View>
                <DrawerItems {...props} />
          </View>
          <View>
              <SafeAreaView forceInset={{top:'always', horizontal:'never'}}>
              <TouchableOpacity onPress={()=>
              Alert.alert('Log out',
              'Do you want to logout?',
              [
                  {text:'Cancel',onPress:()=>{return null}},
                  {text:'Confirm',onPress:()=>{props.navigation.navigate('Login')}}
              ],
              {cancelable:false}
              )
              }>
              <Text style={{margin:16,fontWeight:'bold'}}>Logout</Text>
              </TouchableOpacity>
              </SafeAreaView>
          </View>
          
        </View>
    )
}
)

  const SwitchNavigator=createSwitchNavigator({
    Swiper:{
        screen:Swiper
    },
    Login:{
        screen:Login
    },
    DrawerNavigator:DrawerNavigator
    })

const AppContainer=createAppContainer(SwitchNavigator)

export default AppContainer