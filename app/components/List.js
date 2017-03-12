import React, { Component, PropTypes } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'


export default class List extends Component {
  // static propTypes = {
  //   items: PropTypes.array,
  //   onRemove: PropTypes.func,
  //   onCompleted: PropTypes.func
  // }

  constructor(props) {
    super(props)
  }

  renderItem(item, i) {
    const { onRemove, onCompleted } = this.props
    const textStyle = item.completed ? [styles.text, styles.completed] : [styles.text]

    return (
      <View key={i} style={styles.item}>
        <View style={{ width: 7, height: 45, backgroundColor: item.color, marginRight: 7 }} />
        <Checkbox
          isCheck={ item.completed }
          onToggle={ () => onCompleted(i) }
        />
        <Text style={textStyle}>{ item.label }</Text>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.removeWrapper} onPress={ () => onRemove(i) }>
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
        {this.props.items.map(this.renderItem.bind(this))}
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
