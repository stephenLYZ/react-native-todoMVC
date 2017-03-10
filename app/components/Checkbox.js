import React, { Component, PropTypes } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  box: {
    borderColor: "#999",
    width: 30,
    height: 30,
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 50,
  },
  checked: {
    borderColor: "#CD5C5C"
  },
  inner: {
    flex: 1,
    margin: 5,
    borderRadius: 50,
    backgroundColor: "#CD5C5C"
  }
})

export default class Checkbox extends Component {
  static propTypes = {
    isCheck: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { isCheck, onToggle } = this.props
    const styleBox = isCheck ? [styles.box, styles.checked] : [styles.box]

    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styleBox}>
          { isCheck && <View style={styles.inner} /> }
        </View>
      </TouchableOpacity>
    )
  }
}
