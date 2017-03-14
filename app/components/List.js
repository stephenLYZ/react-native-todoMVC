import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

import Checkbox from './Checkbox'


export default class List extends Component {
  constructor(props) {
    super(props)
  }

  onEdit = (item) => {
    const { navigator } = this.props
    navigator.push({ name: 'EditView', item })
  }

  renderItem(item, i) {
    const { actions } = this.props
    const { onRemove, onCompleted } = actions
    const textStyle = item.completed ? [styles.text, styles.completed] : [styles.text]

    return (
      <View key={i} style={styles.item}>
        <View style={{ width: 7, height: 45, backgroundColor: item.color, marginRight: 9 }} />
        <Checkbox
          isCheck={ item.completed }
          onToggle={ () => onCompleted(item.id) }
          color={ item.color }
        />
        <Text style={textStyle}>{ item.label }</Text>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.editWrapper} onPress={ () => this.onEdit(item)}>
            <Image source={require('../assets/edit.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeWrapper} onPress={ () => onRemove(item.id) }>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const { items } = this.props
    return (
      <ScrollView style={styles.container}>
        {items.map(this.renderItem.bind(this))}
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    height: 45,
    backgroundColor: 'white',
  },
  completed: {
    color: '#d9d9d9',
    textDecorationLine: 'line-through',
  },
  rightSection: {
    flexDirection: 'row',
  },
  removeWrapper: {
    width: 28,
    marginRight: 15,
    justifyContent: 'center'
  },
  editWrapper: {
    justifyContent: 'center',
    marginRight: 6,
  },
  image: {
    height: 20,
    width: 20,
  },
  remove: {
    color: '#CD5C5C',
    fontSize: 26,
  },
  text: {
    flex: 2,
    color: '#693504',
  },
})
