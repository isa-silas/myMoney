import styled, { css } from 'styled-components/native'

import Icon from 'react-native-vector-icons/FontAwesome5'

interface IconeProps {
  tipo: 'up' | 'down'
}

interface ConteinerProps extends IconeProps {
  ativo: boolean
}

export const Conteiner = styled.TouchableOpacity<ConteinerProps>`
  width: 48%;
  border-width: 1.5px;
  border-style: solid;
  border-color: #adb5bd;
  border-radius: 5px;
  
  ${({ ativo, tipo }) => ativo && tipo === 'up' && css`
    background-color: #d8f3dc;
  `}

  ${({ ativo, tipo }) => ativo && tipo === 'down' && css`
    background-color: #ffccd5;
  `}
`
export const Icone = styled(Icon)<IconeProps>`
  margin-right: 12px;
  font-size: 24px;

  ${({ tipo }) => tipo === 'up' && css`
    color: #38B000;
  `}

  ${({ tipo }) => tipo === 'down' && css`
    color: #E5383B;
  `}
`

export const Titulo = styled.Text`
  color: #000;
`

export const Botao = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`