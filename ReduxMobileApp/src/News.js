import React from 'react'
import { Header, Filter, List } from './components'
import { View, Button } from 'react-native'
import { styles } from './styles/styles'

export class News extends React.Component {
  render(){
    return (
      <View>
        <Header />
        <Filter />
        <List />
        <Button title="Go To People" onPress={this.props.goToPeople} color="green"/>
      </View>
    )
  }
}
