import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { StyleSheet, View } from 'react-native'

// import components
import Title from '../components/Title'
import List from '../components/List'

import Actions from '../redux/actions'

class HomeView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Title {...this.props} />
        <List  {...this.props} />
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
    items: state.todos.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
