/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import Post from './src/components/Post';

 const width = Dimensions.get('screen').width;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      fotos: []
    }
  }


  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos: json}))
  }




  render() {

    return (

<FlatList style={styles.containeer}
keyExtractor={item => item.id}
 data = {this.state.fotos}
 renderItem={
   ({item}) =>

  <Post foto={item} />
      
  }
/>


    );
  }
}

const styles = StyleSheet.create({
  containeer: {
    marginTop: 20
  },
});


