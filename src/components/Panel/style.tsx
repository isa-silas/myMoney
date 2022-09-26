import styled from "styled-components/native";
import IconPanel from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
    width:300px;
    border-radius: 5px;
    padding: 20px;
    margin: 16px;
    background-color:#fff
`
export const Icon = styled(IconPanel)`
    font-size: 18px;   
`
export const Header = styled.View`
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
   padding-bottom:35px;
`
export const Title = styled.Text`
    font-size:15px;
    font-weight:bold;
    `
    export const Footer = styled.View`
    
    `
    export const Total = styled.Text`
    font-size:30px;   
    font-weight:bold;
`
export const LastTransaction = styled.Text`
    
`

