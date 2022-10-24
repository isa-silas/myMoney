import styled, { css } from 'styled-components/native'

import icon from 'react-native-vector-icons/FontAwesome5'

interface IconProps {
  type: 'up' | 'down'
}

interface ContainerProps extends IconProps {
  active: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  border-width: 1.5px;
  border-style: solid;
  border-color: #adb5bd;
  border-radius: 5px;
  
  ${({ active, type }) => active && type === 'up' && css`
    background-color: #d8f3dc;
  `}

  ${({ active, type }) => active && type === 'down' && css`
    background-color: #ffccd5;
  `}
`
export const Icon = styled(icon)<IconProps>`
  margin-right: 12px;
  font-size: 24px;

  ${({ type }) => type === 'up' && css`
    color: #38B000;
  `}

  ${({ type }) => type === 'down' && css`
    color: #E5383B;
  `}
`

export const Title = styled.Text`
  color: #000;
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`