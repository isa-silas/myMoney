
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Conteiner = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 16px;
`
export const Categoria = styled.Text`
  color: #000;
  font-size: 14px;
`
export const Icone = styled(Icon)`
  color: #000;
  font-size: 20px;
`
export const IconeLista = styled(Icon)`
  color: #000;
  font-size: 18px;
  margin-right: 10px;
`

export const CategoriaSelecao = styled.View`
  align-items: center;
  flex-direction: row;
`
