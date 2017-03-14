import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

export default class Completed extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { items, actions } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Completed: { items.length } </Text>
        <TouchableHighlight style={styles.btn} onPress={ () => actions.onRemoveCompleted() }>
          <Text style={styles.text}>Remove All</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.3,
    zIndex: 1,
  },
  title: {
    color: '#693504',
    fontSize: 25,
  },
  btn: {
    width: 140,
    height: 40,
    backgroundColor: '#CD5C5C',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.3,
    marginTop: 30,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
})
