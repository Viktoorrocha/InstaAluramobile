/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList} from 'react-native';

 const width = Dimensions.get('screen').width;

export default class Post extends Component {
  render() {
    
    return (

   <View>

     <View style={styles.cabecalho}>
        <Image source={{uri: this.props.foto.urlPerfil }}
         style={styles.fotoPerfil}/>  
         <Text>{this.props.foto.loginUsuario}</Text>

     </View>

             <Image source={{uri: this.props.foto.urlFoto}}
               style={styles.foto}/>  
        </View>      


    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10, flexDirection: 'row', alignItems: 'center'
  },
  fotoPerfil: {
    width: 40, height: 40, borderRadius: 20, marginRight: 10

  },
  foto: {
    width: width,
    height: width
  }
});


