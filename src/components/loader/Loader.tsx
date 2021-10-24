import React from 'react'
import { ActivityIndicator } from 'react-native'

import { LoaderProps } from './types'

const Loader: React.FunctionComponent<LoaderProps> = () => {
  return (
    <ActivityIndicator
      style={{ marginTop: 20}}
      color="#00bfca"
      size="large"
    />
  )
}

export default Loader