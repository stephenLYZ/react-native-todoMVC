import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default class Checkbox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isCheck, onToggle, color } = this.props
    const styleBox = isCheck ? [styles.box, { borderColor: color }] : [styles.box]

    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styleBox}>
          { isCheck && <View style={[styles.inner, { backgroundColor: color }]} /> }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  box: {
    borderColor: "#999",
    width: 25,
    height: 25,
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 50,
  },
  checked: {
    borderColor: "#CD5C5C"
  },
  inner: {
    flex: 1,
    margin: 3,
    borderRadius: 50,
  }
})
