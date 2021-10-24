import React from 'react'

import { MainViewProps } from './types'
import * as Styled from './MainView.styled'

const MainView: React.FunctionComponent<MainViewProps> = ({
  children,
  gutter
}) => {
  return (
    <Styled.MainView gutter={gutter}>
      {children}
    </Styled.MainView>
  )
}

export default MainView
