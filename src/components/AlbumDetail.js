import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const {data} = props
  const {
          headerContentStyle,
          thumbnailStyle,
          thumbailContainerStyle,
          headerTextStyle,
          imageStyle
        } = styles;

  return(
    <Card>
      <CardSection>
        <View style={thumbailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: data.thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle} >
          <Text style={headerTextStyle}>{data.title}</Text>
          <Text>{data.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{uri: data.image}}
        />
      </CardSection>
      <CardSection>
        <Button onPress={()=> Linking.openURL(data.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle:{
    height: 50,
    width: 50
  },
  thumbailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail
