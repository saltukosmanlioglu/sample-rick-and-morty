import React from 'react'
import { ActivityIndicator } from 'react-native'

import { LoaderProps } from './types'

const Loader: React.FunctionComponent<LoaderProps> = () => {
  return (
    <ActivityIndicator size="large" color="#00bfca" />
  )
}

export default Loader
