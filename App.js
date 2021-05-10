import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import ChatStackNavigator from "./src/navigations/Navigators"
import {
  useFonts,
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic,
} from "@expo-google-fonts/roboto-condensed"
import AppLoading from "expo-app-loading"

const App = () => {
  let [fontsLoaded] = useFonts({
    RobotoCondensed_300Light,
    RobotoCondensed_300Light_Italic,
    RobotoCondensed_400Regular,
    RobotoCondensed_400Regular_Italic,
    RobotoCondensed_700Bold,
    RobotoCondensed_700Bold_Italic,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NavigationContainer>
      <ChatStackNavigator />
    </NavigationContainer>
  )
}

export default App
