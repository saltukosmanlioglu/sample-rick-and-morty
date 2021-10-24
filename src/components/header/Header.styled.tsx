import styled from 'styled-components/native'

export const Header = styled.View`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-bottom-color: #cecece;
  border-bottom-width: 1px;
`

export const HeaderRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`

export const GoBackText = styled.Text`
  color: #00bfca;
`

export const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
`