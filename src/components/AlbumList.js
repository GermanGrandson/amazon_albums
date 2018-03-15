import React, {Component} from 'react';
import {View} from 'react-native';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = {albums: [] };

  /*This will execute as soon as component is rendered on screen*/
  componentWillMount(){

    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(responseData => this.setState({albums: responseData}))
  }

  renderAlbums(){
    return this.state.albums.map( album => 
      <AlbumDetail key={album.title} data={album} />
    )
  }

  render(){
    // console.log(this.state);

    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
