
import styled from 'styled-components/native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import icon from 'react-native-vector-icons/FontAwesome5'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface CategoryProps {
    ativo: boolean
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: #e5e5e5;
`


export const Header = styled.View`
    width:100%;
    height: 15%;
    background-color: #14174f;
    margin-bottom:8%;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 20px
`
export const List = styled.FlatList`
    width:80%;
`
export const Footer = styled.View`

`
export const CategoryBtn = styled.TouchableOpacity<CategoryProps>`
    width:100%;
    padding;20px
    flex-direction: row;
    align-items; center;
    // change if clicked
    background-color: ${({ ativo }) => ativo ? '#fff' : '#EAEBEB' };
    `
export const ContainerBtn = styled.View`
    flex: 1;
    width:100%;
    align-items: center;
    justify-content: center;
`
export const SendBtn = styled.View`
    // flex: 1;
    width:80%;
    height:15%;
    background-color: #912521;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
`
export const LabelBtn = styled.Text`
    // flex: 1;
    color: #fff;
    font-size:20px;
`

export const Name = styled.Text`
    font-size:18px;
`

export const Icon = styled(icon)`
    // width:100%;
    height: 23px;
    // color:#fff;
    font-size:23px;
    color: ${({ color }) => color == 'green' ? '#22d10f' : '#ba1318'};
    // background-color: #03045e;
`

export const Separator = styled.View`
    width: 100%;
    height: 2px;
    background-color: #49081f;
`