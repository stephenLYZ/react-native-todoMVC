import React, { Component, PropTypes } from 'react'
import { View, StatusBar, StyleSheet, Navigator } from 'react-native'

// import components
import TabView from './TabView'
import EditView from './EditView'

const ROUTES = { TabView, EditView }

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  renderScene = (route, navigator) => {
    const Scene = ROUTES[route.name]
    return <Scene {...route} navigator={navigator} />
  }
  configureScene = (route, routeStack) => {
    switch(route.name){
      case 'EditView':
        return Navigator.SceneConfigs.FloatFromRight
      default:
        return Navigator.SceneConfigs.PushFromRight
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Navigator
          initialRoute={{ name: 'TabView' }}
          renderScene={this.renderScene}
          configureScene={this.configureScene}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
