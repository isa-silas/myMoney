import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome5'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface CategoriaProps {
    ativo: boolean
}

export const Conteiner = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: #EAEBEB;
`

export const Cabecalho = styled.View`
   background-color: #49081f;
  width: 100%;
  height: 113px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 19px;
`

export const Titulo = styled.Text`
    color: #fff;
    font-size: 22px;
`

export const Rodape = styled.View`
    width: 100%;
    padding: 24px;
`

export const Categoria = styled.TouchableOpacity<CategoriaProps>`
    width: 100%;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ ativo }) => ativo ? '#fff' : '#EAEBEB' };
`

export const Icone = styled(Icon)`
    color: #000;
    font-size: 18px
`

export const Nome = styled.Text`
    font-size: 16px;
    padding-left: 10px;
`

export const Separador = styled.View`
    width: 100%;
    height: 2px;
    background-color: #49081f;
`