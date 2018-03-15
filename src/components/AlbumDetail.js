import React from 'react';
import {Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  // const {data} = props

  return(
    <Card>
      <CardSection>
        <Text>{props.data.title}</Text>
      </CardSection>
    </Card>
  )
}

export default AlbumDetail