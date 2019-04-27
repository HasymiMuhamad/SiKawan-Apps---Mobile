import React, { Component } from 'react'
import axios from 'axios'
import { Picker, Text, View, TouchableOpacity,FlatList,ActivityIndicator, ScrollView, AsyncStorage } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Container, Header, Content, Accordion } from "native-base";

const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class Nilai extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        nilai : [],
        loading : true,
        email : '',
        token : '',
        quiz : false,
        uas : false,
    }
}

  componentWillMount() {

    axios.get(
      // 'https://sikawan-app.herokuapp.com/student/score',
    "http://192.168.88.136:8080/student",
      {headers: {
          "Authorization" : `${this.props.navigation.state.params.token}`
        }
      }
    )
    
      .then((result) => {
        console.log(result);
        this.setState({nilai : result.data.data.details,})
      })
  }

  renderItem=(item)=>{
    return <ListItem item={item}
    />
  }
   uas=(uas)=>{
     console.log("uasss");
     
     this.setState({uas:true,loading:false})
     return <Accordions uas={uas}/>

   }
  
  render() {
  // console.log(this.props.navigation);
  const {loading}=this.state
  // if(!loading){
  //   return (
  //     <View>
  //       <FlatList
  //       data={this.state.nilai}
  //       renderItem={this.renderItem}
  //       />
  //       {/* <Text>{this.state.nilai}</Text> */}
  //     </View>
  //   )
  // } else {
  //   return (
  //     <ActivityIndicator size="large" color="blue"/>
  //   )
  // }
  // const nilaiUas = this.state.nilai.map(function(item){
  //   if (item.category=="uas"){
  //     return (item.point)
  //   }
  // })
  // const namaUas = this.state.nilai.map(function(item){
  //   if (item.category=="uas"){
  //     return (item.subjects.name)
  //   }
  // })

  // console.log(namaUas, nilaiUas)

  const uas= this.state.nilai
    .filter(item => {return item.category === "uas"})
    .map(item => {
      return {title: item.subjects.name,content:item.point}
    })

    const uts= this.state.nilai
    .filter(item => {return item.category === "uts"})
    .map(item => {
      return {title: item.subjects.name,content:item.point}
    })

    const quiz= this.state.nilai
    .filter(item => {return item.category === "quiz"})
    .map(item => {
      return {title: item.subjects.name,content:item.point}
    })

    const assignment= this.state.nilai
    .filter(item => {return item.category === "assignment"})
    .map(item => {
      return {title: item.subjects.name,content:item.point}
    })

  return(

    <ScrollView>

  <View>
    <View style={{padding:20,backgroundColor: "white", borderRadius:5, }}>
      <View style={{
          flexDirection:"row", 
          justifyContent: "space-around",
          margin:5,
          }}>
          <TouchableOpacity style={{backgroundColor: "#4384F4",padding:20, alignItems:"center",borderRadius: 10,}} onPress={this.uas}>
          <Icons name="folder-account-outline" size={50} color="black" header={null}/>
          <Text style={{fontSize: 20, color: 'white'}}> UAS </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#4384F4",padding:20, alignItems:"center",borderRadius: 10,}}>
          <Icons name="folder-account-outline" size={50} color="black" header={null}/>
          <Text style={{fontSize: 20, color: 'white'}}> MID </Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection:"row", 
          justifyContent: "space-around",
          margin:5,
          marginTop: 10,
          }}>
          <TouchableOpacity style={{backgroundColor: "#4384F4",padding:20, alignItems:"center",borderRadius: 10,}}>
          <Icons name="folder-account-outline" size={50} color="black" header={null}/>
          <Text style={{fontSize: 20, color: 'white'}}> Quiz </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#4384F4",padding:20, alignItems:"center",borderRadius: 10,}}>
          <Icons name="folder-account-outline" size={50} color="black" header={null}/>
          <Text style={{fontSize: 20, color: 'white'}}> Tugas </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {/* <Assigment nilai={this.state.nilai} /> */}
        {/* <Hasil 
        nilai={this.state.nilai} 
        loading={this.state.loading}
        /> */}
        {/* {loading?null:<ListItem/>} */} 
        
      {/* {this.state.nilai.map(function(item){
        if(item.category=="quiz"){
        return <Text>{item.point}</Text>
        }
      })}
       */}
       
       {/* {loading? null:<Accordions uas={uas}/>} */}
        <Text> Nilai UAS </Text>
        <Accordion dataArray={uas} expanded={0}/>

        <Text> Nilai UTS</Text>
        <Accordion dataArray={uts} expanded={0}/>

        <Text> Nilai Quiz</Text>
        <Accordion dataArray={quiz} expanded={0}/>

        <Text> Nilai Tugas</Text>
        <Accordion dataArray={assignment} expanded={0}/>

      </View>
    </View>
    </ScrollView>
    )
  }
}
