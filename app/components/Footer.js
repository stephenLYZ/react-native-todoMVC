import React, { Component, PropTypes } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  text: {
    color: '#CD5C5C',
    fontSize: 20,
  }
})

export default class Footer extends Component {
  static propTypes = {
    onRemoveCompleted: PropTypes.func
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity style={styles.footer} onPress={this.props.onRemoveCompleted.bind(this)}>
        <Text style={styles.text}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
