import React,{Component} from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

export default class myReactApp extends Component {
  state={
    email:'',
    password:'',
}
handleEmail=(text)=>{
    this.setState({email:text})
}
handlePassword=(text)=>{
    this.setState({password:text})
}
login=(email,pass)=>{
    alert('Email: '+ email + '\nPassword: '+pass)
}
  render() {
    return (
      <View style={ styles.container }>
        <View style = {StyleSheet.loginForm}>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Email"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handleEmail}/>
                <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Password"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.handlePassword}/>
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {
                    ()=>this.login(this.state.email,
                        this.state.password)
                    }>
                        <Text style = {styles.submitButtonText}>
                           Submit 
                        </Text>
                        </TouchableOpacity>
                <Text style = {styles.forgotColor}>Forgot Password?</Text>
                <Image source={require('./images/office.jpg')}  
    style={styles.imgPosition} ></Image>
            </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
      flex:1
  },
  input:{
      margin:5,
      height:50,
      borderColor:'#7a42f4',
      borderWidth:2,
      flexDirection: 'column',
      justifyContent: 'center',
  },
  submitButton:{
      backgroundColor:'#7a42f4',
      padding:10,
      margin:15,
      height:40,
      flexDirection: 'column',
      alignItems: 'center', 
  },
  submitButtonText:{
      color:'white'
  },
  imgPosition: {
      position: 'absolute',
      width: 150,
      height: 100,
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection:'column-reverse'
  },

})