import React from 'react'
import { Text, View, ListView } from 'react-native'
import { styles } from '../styles/styles'
import { connect } from 'react-redux'

const List = (props) => {
  return (
    <View style={styles.list}>
      {props.news.map((item, index) => {
        return <Text style={styles.textList} key={index}>{item.title}</Text>
        })
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(List)
