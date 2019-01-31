import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Provider } from "react-redux"
import store from "./src/store"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View />
      </Provider>
    )
  }
}
