import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { StyleSheet, Image, Dimensions, View } from 'react-native'

import Edit from '../components/Edit'
import Actions from '../redux/actions'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

class EditView extends Component {
  constructor(props) {
    super(props)
  }

  handleClose = () => {
    this.props.navigator.pop()
  }

  handleSubmit = (label, color) => {
    const { actions } = this.props
    actions.addItem(label, color)
    this.handleClose()
  }

  render() {
    return (
      <View style={styles.container}>
        <Edit handleClose={this.handleClose} handleSubmit={this.handleSubmit} {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff'
  }
})

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditView)
