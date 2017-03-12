import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image
} from 'react-native'

import Tab from '../components/Tab'
import Actions from '../redux/actions'

class TabView extends Component {
  constructor(props){
    super(props)
  }

  renderTab = (index) => {
    const { navigator } = this.props

    switch(index) {
      case 0:
        return <Text> Home </Text>
      case 1:
        return <Text> Completed </Text>
      default:
        return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Tab renderTab={this.renderTab} {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
    tab: state.index
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabView)
