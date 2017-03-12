import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native'

import TabNavigator from 'react-native-tab-navigator'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

export default class Tab extends Component {
  constructor(props) {
    super(props)
  }

  handleSwitchTab = (index) => {
    const { actions } = this.props
    actions.switchTab(index)
  }

  render() {
    const { renderTab, tab } = this.props

    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          style={styles.item}
          title='Home'
          selected={tab === 0}
          onPress={() => this.handleSwitchTab(0)}
          renderIcon={() => <Image style={styles.icon} source={require('../assets/home.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/homeFilled.png')} />}
        >
          { renderTab(0) }
        </TabNavigator.Item>
        <TabNavigator.Item
          style={styles.item}
          title='Completed'
          selected={tab === 1}
          onPress={() => this.handleSwitchTab(1)}
          renderIcon={() => <Image style={styles.icon} source={require('../assets/checked.png')} />}
          renderSelectedIcon={() => <Image style={styles.icon} source={require('../assets/checkedFilled.png')} />}
        >
          { renderTab(1) }
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: windowHeight - 50,
  },
  icon: {
    width: 20,
    height: 20
  }
})
