import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 15,
  }
})

export default class Input extends Component {

  static PropTypes = {
    onSubmit: PropTypes.function,
    placeholder: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  onChangeText(text) {
    this.setState({
      text
    })
  }

  onSubmitEditing() {
    const { onSubmit } = this.props
    const { text } = this.state

    if(!text) return

    onSubmit(text)

    this.setState({
      text: ''
    })
  }

  render() {
    const { onSubmit, placeholder } = this.props
    const { text } = this.state

    return (
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={text}
        onChangeText={this.onChangeText.bind(this)}
        onSubmitEditing={this.onSubmitEditing.bind(this)}
      />
    )
  }
}
