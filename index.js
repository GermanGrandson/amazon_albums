// Import a library to help create a component *********
import React from 'react';
import {Text, AppRegistry, View} from 'react-native'; //This is importing the text proprerty specificaly from the react native library
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// Create a component *********
// A Component is a JS Function that returns some JSX
const App = ()=>{
  return(
    <View style={{flex: 1}}>
      <Header headerText={'Albums'} /> {/* Empty tags are self closing. Not <Header></Header> */}
      <AlbumList />
    </View>
  );
};

// Render it to the device *********
// ReactNative.AppRegistry.registerComponent('albums', ()=> App);
// Because we improted AppRegister we don't need the ReactNative part as above
AppRegistry.registerComponent('albums', ()=> App);
