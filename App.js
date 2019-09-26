import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity } from 'react-native';

export default class App extends Component {

  static navigationOptions = {
    title: 'gitGet'
  };
 
  render() {
    return (

      <View style={ styles.container } >
      
      <StatusBar barStyle="light-content" backgroundColor='#006' />
      
      <View style={{alignItems: 'center', backgroundColor: '#777', width: '70%', minHeight: 200, padding: 20, borderRadius: 7}}>
        
        <Text style={{textAlign: 'center', color: 'white', justifyContent: 'center', fontWeight: 'bold'}}>Login</Text>
        
        <TextInput 
        style={{color: '#000', marginTop: 40, height: 40, backgroundColor: 'white', width: '90%', borderRadius: 7}} 
        placeholder='usuário' />
     
        <TextInput 
        style={{color: '#000', marginTop: 20, marginBottom: 20, height: 40, backgroundColor: 'white', width: '90%', borderRadius: 5}} 
        placeholder='senha' />

        <TouchableOpacity style={{backgroundColor: 'white', width: 70, color: '#006', padding: 5, borderRadius: 5}} >
          <Text style={{textAlign: 'center', fontWeight: 'bold'}} >Entrar</Text>
        </TouchableOpacity>
      </View>
      
      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006',
  },
  
});