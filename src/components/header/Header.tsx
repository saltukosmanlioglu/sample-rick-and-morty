import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { HeaderProps } from './types'
import * as Styled from './Header.styled'

const Header: React.FunctionComponent<HeaderProps> = ({
  text,
  title
}) => {
  const navigation = useNavigation()

  return (
    <Styled.Header>
      <Styled.HeaderRow>
        {text && (
          <Styled.GoBack testID='back' onPress={() => navigation.goBack()}>
            <Styled.GoBackText>{text}</Styled.GoBackText>
          </Styled.GoBack>
        )}
        <Styled.Title>{title}</Styled.Title>
      </Styled.HeaderRow>
    </Styled.Header>
  )
}

export default Header
