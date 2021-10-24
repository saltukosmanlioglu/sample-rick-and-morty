import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { routes } from './src/routes/routes'

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
          {routes.map((route, index) => (
            <Stack.Screen
              key={index}
              component={route.component}
              name={route.name}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}