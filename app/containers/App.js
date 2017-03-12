import React, { Component, PropTypes } from 'react'
import { View, StatusBar, StyleSheet, Navigator } from 'react-native'

// import components
import TabView from './TabView'
import EditView from './EditView'

const ROUTES = { TabView, EditView }

// const mapStateToProps = (state) => ({
//   items: state.items,
// })
//
// class App extends Component {
//
//   static propTypes = {
//     items: PropTypes.array.isRequired,
//     dispatch: PropTypes.func.isRequired,
//   }
//
//   constructor(props) {
//     super(props)
//   }
//
//   addItem(item) {
//     this.props.dispatch(actionCreators.addItem(item))
//   }
//
//   onRemove(item) {
//     this.props.dispatch(actionCreators.onRemove(item))
//   }
//
//   onCompleted(item) {
//     this.props.dispatch(actionCreators.onCompleted(item))
//   }
//
//   onRemoveCompleted() {
//     this.props.dispatch(actionCreators.onRemoveCompleted())
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Title />
//         {/* <Input
//           placeholder={'Enter a todo!'}
//           onSubmit={this.addItem.bind(this)}
//         /> */}
//         {/* <View style={styles.divider} /> */}
//         <List
//           items={this.props.items}
//           onRemove={this.onRemove.bind(this)}
//           onCompleted={this.onCompleted.bind(this)}
//         />
//         <View style={styles.divider} />
//         {/* <Footer onRemoveCompleted={this.onRemoveCompleted.bind(this)}/> */}
//       </View>
//     )
//   }
// }

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
