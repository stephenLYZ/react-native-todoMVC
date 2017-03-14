import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet, Text, TouchableHighlight } from 'react-native'

import * as COLOR from '../constants/ColorConst'

export default class Edit extends Component {
  constructor(props) {
    super(props)
    const { item } = this.props
    if(item) {
      this.state = {
        label: item.label,
        color: item.color
      }
    } else {
      this.state = {
        label: '',
        color: ''
      }
    }    
  }
  onChangeText = (text) => {
    this.setState({
      label: text
    })
  }

  onSubmitEditing = () => {
    const { handleSubmit } = this.props
    const { label, color } = this.state
    handleSubmit(label, color)
  }

  onCloseEditing = () => {
    const { handleClose } = this.props
    handleClose()
  }

  renderInput = () => {
    const { label } = this.state
    return (
      <TextInput
        placeholder='write here...'
        style={styles.input}
        value={label}
        onChangeText={this.onChangeText}
      />
    )
  }

  renderColor = () => {
    const colorArr = [COLOR.black, COLOR.blue, COLOR.green, COLOR.yellow, COLOR.orange, COLOR.red]
    return (
      <View style={styles.colorContainer}>
        { colorArr.map((color, i) => {
          return (
            <TouchableHighlight
              key={i}
              style={{ marginTop: 20, borderColor: '#888', height: 86, borderWidth: this.state.color === color ? 3 : 0 }}
              onPress={() => { this.setState({ color: color}) }}
            >
              <View style={{ width: 80, height: 80, backgroundColor: color }} />
            </TouchableHighlight>
          )
        })}
      </View>
    )
  }

  renderBar = () => {
    return (
      <View style={styles.bar}>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={this.onCloseEditing}
          style={styles.btn}>
            <Text style={styles.text}> Cancel </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor='transparent'
            onPress={this.onSubmitEditing}
            style={styles.btn}>
              <Text style={styles.text}> Submit </Text>
            </TouchableHighlight>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          What do you wanan do?
        </Text>
        {this.renderInput()}
        <Text style={styles.title}>
          What's the color?
        </Text>
        {this.renderColor()}
        {this.renderBar()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title: {
    color: '#693504',
    fontSize: 20,
  },
  input: {
    height: 45,
    padding: 10,
    borderColor: '#693504',
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 30,
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
  },
  btn: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderWidth: 1,
    borderColor: '#693504',
  },
  text: {
    fontSize: 15,
  }
})
