
import styled from 'styled-components/native'
import { Feather, MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 16px;
`
export const Category = styled.Text`
  color: #000;
  font-size: 14px;
`
export const Icon = styled(MaterialIcons)`
  color: #000;
  font-size: 20px;
`
export const IconFeather = styled(Feather)`
  color: #000;
  font-size: 18px;
  margin-right: 10px;
`

export const CategorySelect = styled.View`
  align-items: center;
  flex-direction: row;
`
