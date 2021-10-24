import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Detail from './src/pages/detail'
import Episode from './src/pages/episode'
import List from './src/pages/list'

const Stack = createNativeStackNavigator()
const INITIAL_ROUTE_NAME = 'List'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={INITIAL_ROUTE_NAME}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Episode" component={Episode} />
          <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}