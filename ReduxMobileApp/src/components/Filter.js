import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, TextInput } from 'react-native'
import { styles } from '../styles/styles'
import { fetchData } from '../Actions'

export const Filter = (props) => {
  return (
    <View style={styles.filter}>
      <TextInput
        placeholder=" Search Your News Here..."
        style={styles.textInput}
        onChangeText={e => props.fetchData(e) }/>
    </View>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchData}, dispatch)
}

export default connect(null, mapDispatchToProps)(Filter)
