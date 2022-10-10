import styled from "styled-components/native";
import icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
    flex: 1;
    background-color: #e5e5e5;
`
export const Header = styled.View`
// flex: 1;
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
export const RegisterInfo = styled.View`
    flex: 1;
    background-color: #e5e5e5;
    align-items: center;
    justify-content: center
`
export const RegisterName = styled.TextInput`
    // flex: 1;
    width: 80%;
    width: 80%;
    background-color: #fff;
    margin: 1%;
    padding:3%;
    border-radius:2
    `
export const RegisterPrice = styled.TextInput`
    width: 80%;
    background-color: #fff;
    margin: 1%;
    padding:3%;
    border-radius:2
`
export const Cards = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    width:80%;
`

export const Card = styled.View`
    // flex: 1;
    width:48%;
    flex-direction:row;
    background-color: transparent;
    align-items: center;
    justify-content: space-evenly;
    padding-vertical:5%
    border: solid;
    border-width: 1px;
    border-color: #8a8a8a;
    border-radius: 2px;
`
export const CardLabel = styled.Text`
    // flex: 1;
    font-weight: bold;
   color: #393f54;
`
export const Icon = styled(icon)`
    // width:100%;
    height: 23px;
    // color:#fff;
    font-size:23px;
    color: ${({color})=>color=='green'?'#22d10f':'#ba1318'};
    // background-color: #03045e;
`
export const Category = styled.View`
    flex: 1;
    background-color: #e5e5e5;
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
