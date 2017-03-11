import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native'


const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

export default class Title extends Component {
  constructor(props) {
    super(props)
  }

  handleAdd = () => {}

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.background}>
            <Image
              style={styles.image}
              source={require('../assets/todo.png')}
            />
            <Text style={styles.title}>
              Todo List
            </Text>
            <TouchableHighlight
              activeOpacity='0.6'
              underlayColor='transparent'
              style={styles.add}
              onPress={this.handleAdd}
            >
              <Image source={require('../assets/add.png')} style={styles.icon}/>
            </TouchableHighlight>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: 200,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4},
    shadowOpacity: 0.3,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    paddingTop: 5,
    color: '#000',
    fontSize: 25,
  },
  add: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  icon: {
    width: 20,
    height: 20,
  }
})
