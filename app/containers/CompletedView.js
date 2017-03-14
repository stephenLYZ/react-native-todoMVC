import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { StyleSheet, View } from 'react-native'

import Actions from '../redux/actions'
import List from '../components/List'
import Completed from '../components/Completed'

class CompletedView extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Completed {...this.props} />
        <List {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

const mapStateToProps = (state) => {
  return {
    items: state.todos.items.filter((item) => {
      return item.completed
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletedView)
