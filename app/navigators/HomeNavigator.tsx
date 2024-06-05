import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "app/screens"

export type HomeNavigatorParamList = {
  Demo: undefined
}

const Stack = createNativeStackNavigator<HomeNavigatorParamList>()
export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Demo" component={HomeScreen} />
    </Stack.Navigator>
  )
}
