import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

const IndexPage = () => (
  <View style={styles.container}>
    <View style={styles.left}>
      <Text style={styles.title}>Prout on the left</Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.title}>Prout on the right</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: "100vh",
  },
  left: {
    flex: 1,
    backgroundColor: "rose",

    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    backgroundColor: "lightblue",

    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
  },
})

export default IndexPage
