import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import Chat from "../screens/Chat"
import Location from "../screens/Location"
import { Entypo } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#000000",
        inactiveTintColor: "#9F9F9F",
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#fff",
          elevation: 2,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="location-on" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-sharp" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()
const screenOptionStyle = {
  headerShown: false,
}

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <AntDesign
              style={{ marginLeft: 30 }}
              name="left"
              size={34}
              color="black"
            />
          ),
        }}
        name="back"
        component={BottomTabNavigator}
      />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  )
}

export default ChatStackNavigator
