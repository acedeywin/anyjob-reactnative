import React, { useState, useEffect, useRef } from "react"
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Animated,
} from "react-native"
import { SearchBar } from "react-native-elements"
import { ScrollView } from "react-native-gesture-handler"
import Messages from "../components/Messages"
import { API_KEY } from "@env"

const Chat = props => {
  const URL =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const pan = useRef(new Animated.ValueXY()).current
  const list = useRef(new Animated.ValueXY()).current

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setData(data)
      setLoading(false)
    }
    getData()

    Animated.timing(pan, {
      toValue: { x: 0, y: -300 },
      delay: 2000,
      useNativeDriver: false,
    }).start()
  }, [])

  const convertTime = dateFromAPI => {
    const localDate = new Date(dateFromAPI)

    const localTimeString = localDate.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    })
    return localTimeString
  }

  const truncateString = string => {
    let array = string.split(" ")
    if (array.length > 11) {
      array = array.slice(0, 10)
      const joinArray = `${array.join(" ")} ...`
      return joinArray
    }
  }

  return (
    <ScrollView style={styles.cover}>
      <Text h2 style={styles.headline}>
        Search
      </Text>
      <View style={styles.searchBar}>
        <SearchBar
          inputContainerStyle={{ backgroundColor: "#fff" }}
          leftIconContainerStyle={{ backgroundColor: "#fff" }}
          inputStyle={{ backgroundColor: "#fff" }}
          containerStyle={styles.containerStyle}
          placeholder="Search by user or places"
        />
      </View>

      <Text h2 style={styles.headline}>
        Life News
      </Text>
      {loading ? (
        <ActivityIndicator size="large" color="#9F9F9F" />
      ) : (
        <Animated.View style={[list.getLayout(), styles.list]}>
          {data.articles.map((item, index) => (
            <Messages
              key={item.url}
              author={item.author}
              uri={item.urlToImage}
              title={truncateString(item.title)}
              publishedAt={convertTime(item.publishedAt)}
              onPress={() => {
                props.navigation.navigate("Details"),
                  {
                    itemId: item.url,
                    itemName: item.author,
                    itemPic: item.urlToImage,
                  }
              }}
            />
          ))}
        </Animated.View>
      )}
    </ScrollView>
  )
}

export default Chat

const styles = StyleSheet.create({
  searchBar: {
    marginBottom: 50,
    backgroundColor: "#fff",
  },
  containerStyle: {
    backgroundColor: "#fff",
    justifyContent: "space-around",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fff",
    borderBottomWidth: 0,
    shadowColor: "#9F9F9F",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  list: { marginTop: 10 },
  card: { marginLeft: 400, width: 400, flexDirection: "row" },
  cover: {
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontFamily: "RobotoCondensed_700Bold",
    color: "#fff",
    flex: 1,
    fontSize: 24,
  },
  proContainer: {
    marginRight: -20,
    alignSelf: "center",
  },
  ops: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 500,
    backgroundColor: " #fff",
    marginHorizontal: -20,
  },
  col: {
    flexDirection: "row",
    marginTop: 25,
    marginHorizontal: 20,
    alignItems: "center",
  },
  headline: {
    fontFamily: "RobotoCondensed_700Bold",
    color: "#000119",
    flex: 1,
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
  },
})
