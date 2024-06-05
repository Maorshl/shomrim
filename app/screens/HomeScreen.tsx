import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Screen, Text, TextField } from "app/components"
import { useHeader } from "app/utils/useHeader"
import { useNavigation } from "@react-navigation/native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const navigation = useNavigation()
  useHeader({
    leftTx: "common.back",
    onLeftPress: () => navigation.goBack(),
    titleTx: "home.homeTitle",
  })

  // Pull in navigation via hook
  return (
    <Screen style={$root} preset="scroll">
      <TextField />
      <Button tx="home.addGuard" />
      <TextField />
      <Button tx="home.addPosition" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
