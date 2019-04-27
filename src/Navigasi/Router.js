import { 
    createSwitchNavigator, 
    createDrawerNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator,
  //   DrawerNavigation,
    DrawerItems,
    SafeAreaView
  } from 'react-navigation'
import { Alert, View, Text, Image, TouchableOpacity} from 'react-native'
import React,{Component} from 'react'
import Login from '../components/Login/Login'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Dashboard from '../components/Home/Home'
import Nilai from '../components/Nilai/DataNilai'
import Presensi from '../components/Presensi/Presensi'
import Details from '../components/Nilai/Details'
import Swiper from '../components/Swiper/Swiper'
import Landing from '../components/Keluhan/Landing'
import Show from '../components/Keluhan/Show'
import Keluhan from '../components/Keluhan/Keluhan'

  const DashboardStack=createStackNavigator({
      Dashboard:{
          screen:Dashboard,
          navigationOptions:({navigation,props})=>{
              return{
                  headerTitle:"Dashboard",
                  headerRight:(
                    <Icons 
                    style={{paddingLeft:20}}
                    onPress={()=>
                      Alert.alert('Log out',
                      'Do you want to logout?',
                      [
                          {text:'Cancel',onPress:()=>{return null}},
                          {text:'Confirm',onPress:()=>{navigation.navigate('Login')}}
                      ],
                      {cancelable:false}
                      )
                      }
                     
                    name="logout" size={40}/>
                  )
              }
          }
      }
  })

  const NilaiStack=createStackNavigator({
      Score:{
          screen:Nilai,
          navigationOptions:({navigation})=>{
              return{
                  headerTitle:"Data Score",
                  // headerLeft:(
                  //     <Ionicons style={{paddingLeft:20}} 
                  //     onPress={()=>navigation.openDrawer()}
                  //     name="md-menu" size={30}/>
                  // )
              }
          }
      }
  })

  const PresensiStack=createStackNavigator({
      Presensi:{
          screen:Presensi,
          navigationOptions:({navigation})=>{
              return{
                  headerTitle:"Calendar Attendance",
                  // headerLeft:(
                  //     <Ionicons style={{paddingLeft:20}}
                  //     onPress={()=>navigation.openDrawer()}
                  //     name="md-menu" size={30}/>
                  // )
              }
          }
      }
  })

  const KeluhanStack=createStackNavigator({
    Attendance:{
        screen:Landing,
        navigationOptions:({navigation})=>{
            return{
                headerTitle:"Complaint",
                // headerLeft:(
                //     <Ionicons style={{paddingLeft:20}}
                //     onPress={()=>navigation.openDrawer()}
                //     name="md-menu" size={30}/>
                // )
            }
        }
    }
})

const DetailStack=createStackNavigator({
    Details:{
      // screen:Genres,
      screen:Details,
      navigationOptions:({navigation})=>{
        return{
        //   headerTitle:"Details",
          // headerLeft:(
          //   <IonIcon style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()}
          //   name="md-menu" size={30}/>
          // )
          header:null,
        }
      }
    }
  })
  
  const postKeluhan=createStackNavigator({
    Lapor:{
      // screen:Genres,
      screen:Keluhan,
      navigationOptions:({navigation})=>{
        return{
          headerTitle:"Lapor",
          // headerLeft:(
          //   <IonIcon style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()}
          //   name="md-menu" size={30}/>
          // )
          header:null,
        }
      }
    }
  })

  const showKeluhan=createStackNavigator({
    Attendance:{
      // screen:Genres,
      screen:Show,
      navigationOptions:({navigation})=>{
        return{
          headerTitle:"Keluhan",
          // headerLeft:(
          //   <IonIcon style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()}
          //   name="md-menu" size={30}/>
          // )
          header:null,
        }
      }
    }
  })

  const BottomTabNavigator=createBottomTabNavigator({
      Dashboard:DashboardStack,
      Score:NilaiStack,
      Attendance:PresensiStack,
      Complaint:KeluhanStack,
  },{
      defaultNavigationOptions:({navigation})=>
      ({
          tabBarIcon:({focused,tintColor})=>{
            const { routeName } = navigation.state;
              let iconName
              if (routeName==='Dashboard'){
                  iconName=`home${focused?'-account':'-outline'}`
              } else if (routeName==='Score'){
                iconName = `${focused?'chart-areaspline':'chart-bar'}`
              } else if (routeName==='Attendance'){
                  iconName= `${focused?'calendar-multiple-check':'calendar'}`
              } else if (routeName==='Complaint'){
                iconName= `${focused?'book-open':'book'}`
            }
              return <Icons name={iconName} size={30} color={tintColor} header={null}/>
          }
      }),
      navigationOptions:({navigation})=>{
        const {routeName}=navigation.state.routes
        [navigation.state.index];
    
        return {
          header:null,
          headerTitle:routeName
        };
        }
    }
  )



  const StackNavigator=createStackNavigator({
    BottomTab:BottomTabNavigator,
    Details:DetailStack,
    showKeluhan:showKeluhan,
    postKeluhan:postKeluhan,
    // Detail: {
    //   screen: Details,
    // },
  
  },
  {
    defaultNavigationOptions:({navigation,pressed})=>{
      // console.log(this.props.navigation)
  
      return{
        // headerLeft:<Ionicons
        // style={{marginLeft:10,}} 
        // name="md-menu" 
        // onPress={()=>navigation.openDrawer()}
        // size={30}/>
        // headerTitle:"Detail",
        // header:null,
        // headerRight:<Ionicons
        // style={{marginRight:10,}} 
        // name="ios-heart-empty" 
        // // onPress={()=>this.pressed()}
        // size={30}/>
      }
    }
  }
  )
  

  const DrawerNavigator=createDrawerNavigator({
      Beranda:StackNavigator
  },
  {
      contentComponent:(props)=>(
        // console.log(this.props)
          <View>
            <View>
                <View style={{
                    backgroundColor: 'grey',
                    height:140,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={require('../img/a.jpg')} style={{
                        height: 100, 
                        width: 100, 
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: 'white'
                    }}/>
                        <Text style={{color:'white', fontSize: 30}}>
                        {/* {this.props.nama.toUpperCase()} */}
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
      Beranda:StackNavigator
  })

  const AppContainer=createAppContainer(SwitchNavigator)

  export default AppContainer