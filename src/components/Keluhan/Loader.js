import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// const Loader = props => {
//   const {
//     loading,
//     image,
//     ...attributes
//   } = props;
//   console.log(image);
  


export default class Loader extends Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
  }

  toggleModal = () => {
    this.setState({visible: !this.state.visible});
  }
  render() {
    console.log(this.props);
    
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={this.state.visible}
      // onRequestClose={() => {this.props.loading=false}}
      onBackdropPress={() => {
        this.toggleModal();
      }}
      useNativeDriver
      >
      <View style={styles.modalBackground}>
        {/* <View style={styles.activityIndicatorWrapper}> */}
          <Image style={{height:150,width:150,}} source={{uri:this.props.image}}/>

        
        {/* </View> */}
      </View>

    </Modal>
  )
}
}

const styles = StyleSheet.create({
  modalBackground: {
    // flex: 1,
    marginTop:20,
    alignItems: 'center',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    // backgroundColor: '#FFFFFF',
    // height: 100,
    // width: 100,
    // borderRadius: 10,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-around'
  }
});
