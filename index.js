// Import a library to help create a component *********
import React from 'react';
import {Text, AppRegistry} from 'react-native'; //This is importing the text proprerty specificaly from the react native library
import Header from './src/components/header'

// Create a component *********
// A Component is a JS Function that returns some JSX
const App = ()=>{
  return(
    // Empty tags are self closing. Not <Header><Header/>
      <Header />
  );
};

// Render it to the device *********
// ReactNative.AppRegistry.registerComponent('albums', ()=> App);
// Because we improted AppRegister we don't need the ReactNative part as above
AppRegistry.registerComponent('albums', ()=> App);
