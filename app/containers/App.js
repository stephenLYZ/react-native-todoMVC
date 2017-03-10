import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import { actionCreators } from '../redux/todoRedux'

// import components
import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'
import List from '../components/List'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  }
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
  }

  addItem(item) {
    this.props.dispatch(actionCreators.addItem(item))
  }

  onRemove(item) {
    this.props.dispatch(actionCreators.onRemove(item))
  }

  onCompleted(item) {
    this.props.dispatch(actionCreators.onCompleted(item))
  }

  onRemoveCompleted() {
    this.props.dispatch(actionCreators.onRemoveCompleted())
  }
  render() {
    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <Input
          placeholder={'Enter a todo!'}
          onSubmit={this.addItem.bind(this)}
        />
        <View style={styles.divider} />
        <List
          items={this.props.items}
          onRemove={this.onRemove.bind(this)}
          onCompleted={this.onCompleted.bind(this)}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.onRemoveCompleted.bind(this)}/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
