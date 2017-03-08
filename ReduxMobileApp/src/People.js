import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles/styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPeople } from './Actions'

class People extends React.Component {
  componentWillMount(){
    this.props.fetchPeople()
  }
  render(){
    return (
      <View style={styles.people}>
        <Text style={{fontSize: 32}}>People</Text>
        {this.props.people.map((item, index)=>{
          return (
              <Text style={styles.peopleText} key={index}>
                {item.name}
              </Text>
            )
          })
        }
        <Button title="Go To News" onPress={this.props.goToNews} color="green"/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchPeople}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(People)
