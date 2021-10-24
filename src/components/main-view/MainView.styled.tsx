import styled from 'styled-components/native'

import { MainViewProps } from './types'

export const MainView = styled.View<MainViewProps>`
  flex: 1;
  padding: ${(props) => props.gutter ? '10px 15px' : 0};
`