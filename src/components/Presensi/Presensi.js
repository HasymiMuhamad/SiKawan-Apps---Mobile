import React, { Component } from 'react'
import { styles, absen } from '../Style/Style'
import { Text, View, ActivityIndicator, Image } from 'react-native'
import { Calendar } from 'react-native-calendars'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default class Presensi extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
          markedDate : null,
          date : [],
          newDate : ["2019-04-20"],
          nama : '',
          loading: true,
        }
      }
      
      componentWillMount(){

      }

      componentDidMount(){

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
                // console.log(result);
                // const date = result.data.data.attendance.createdAt.slice(0,10)

                this.setState({nama : result.data.data.fullname,loading:false})

                let tanggal=result.data.data.attendance.map(function(item){
                  let obj = {}
                  obj.tanggal=item.createdAt.slice(0,10)
                  obj.keterangan=item.description
                // return (item.createdAt.slice(0,10))
                return obj
              })
                console.log(tanggal);

                let keterangan=result.data.data.attendance.map(function(item){
                return (item.description)})
                console.log(keterangan);         

                  let newDaysObject = {};
                  // if(keterangan=="sick"){  
                    
                  tanggal.forEach((day) => 
                  {                   
                    console.log(day);
                     
                  if(day.keterangan=="sick"){       
                    newDaysObject = 
                    {
                      ...newDaysObject,
                      [day.tanggal]: {
                        selected: true,
                        marked: true,
                        selectedColor:"#FFBB33",
                      }
                    };
                  }
                  else if(day.keterangan=="attend"){       
                    newDaysObject = 
                    {
                      ...newDaysObject,
                      [day.tanggal]: {
                        selected: true,
                        marked: true,
                        selectedColor:"#3DC851",
                      }
                    };
                  }
                  else if(day.keterangan=="absent"){       
                    newDaysObject = 
                    {
                      ...newDaysObject,
                      [day.tanggal]: {
                        selected: true,
                        marked: true,
                        selectedColor:"#FE3D46",
                      }
                    };
                  }      
                }            
                  );
                // }
                  this.setState({ markedDate : newDaysObject})
                // }
                
              })
            }
            });
      }
      
      postDate = () => {
    
      }
      

  render() {
      
    if(!this.state.loading){
    return (

      <View style = { styles.container }>
        
        <View style = { absen.containerProfil }>
            <View style = { absen.profil }>
              <Image style = { absen.image } source = { require ( '../../img/a.jpg' ) } />
              <Text style = { absen.nama }> {this.state.nama} </Text>
              {/* <Text>{tanggal}</Text> */}
            </View>
        </View>

        <View style = { absen.containerCalendar }>
            <View style = { absen.calendar }>
                <Calendar 
                    current = { '2019-03-26' }
                    minDate = { '2017-01-01' }
                    maxDate = {'2022-01-01'}
                    onDayPress = {(day) => {console.log('selected day', day)}}
                    monthFormat = {'yyyy / MM'}
                    onMonthChange = {(month) => {console.log('month changed', month)}}
                    firstDay = {1}
                    markedDates={this.state.markedDate}
                    // markedDates={{'2019-03-18': {marked: true, dotColor: 'red', activeOpacity: 0},}}

                />
            </View>
        </View>

        <View style = { absen.containerKeterangan }>
            <View>
                <View style = { absen.viewKeterangan }>
                    <View style = { absen.hadir }/>
                    <Text> Attend </Text>
                    <View style = { absen.izin }/>
                    <Text> Sick </Text>
                    <View style = { absen.alpha }/>
                    <Text> Absent </Text>
                </View>
                {/* <View style = { absen.viewKeterangan }>
                    <View style = { absen.izin }/>
                    <Text> Sick </Text>
                </View> */}
                {/* <View style = { absen.viewKeterangan }>
                    <View style = { absen.alpha }/>
                    <Text> Absent </Text>
                </View> */}
            </View>

            <View>
                {/* <View style = { absen.viewKeterangan }>
                    <View style = { absen.tp }/>
                    <Text> Tidak Penuh </Text>
                </View> */}
                {/* <View style = { absen.viewKeterangan }>
                    <View style = { absen.alpha }/>
                    <Text> Absent </Text> */}
                {/* </View> */}
            </View>
        </View>

      </View>
    )
    } else {
      return(
        <View>
      <ActivityIndicator color="blue" size="large" />
      </View>
      )
    }
  }
}
