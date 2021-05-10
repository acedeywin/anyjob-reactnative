import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native"

const Messages = ({ author, uri, title, count, publishedAt, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {count > 0 ? (
        <LinearGradient
          colors={["#fff", "#fff", "#fff"]}
          style={styles.gradient}
        >
          <Text style={styles.count}>{count}</Text>
        </LinearGradient>
      ) : null}
      <Image source={{ uri: uri }} style={styles.image} />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.author}>{author} </Text>
        <Text style={styles.title}>{title} </Text>
      </View>
      <Text style={styles.publishedAt}>{publishedAt} </Text>
    </TouchableOpacity>
  )
}

export default Messages

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 30,
    fontWeight: "400",
  },
  gradientStyle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  count: {
    color: "#fff",
    fontFamily: "RobotoCondensed_700Bold",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  author: {
    color: "#000119",
    fontFamily: "RobotoCondensed_700Bold",
    fontSize: 15,
    marginBottom: 10,
  },
  title: {
    fontFamily: "RobotoCondensed_400Regular",
    fontSize: 15,
    color: "#9F9F9F",
  },
  publishedAt: {
    color: "#b6b6b6",
    fontSize: 12,
    flex: 1,
    marginLeft: 480,
    marginBottom: 20,
    position: "absolute",
    fontFamily: "RobotoCondensed_700Bold",
  },
})
