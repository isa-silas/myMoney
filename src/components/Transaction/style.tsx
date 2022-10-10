import styled, { css } from "styled-components/native";
import icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
    background-color: #fff;
    border-radius: 5px;
    padding:18px;
    margin-bottom:14px;

`
export const Title = styled.Text`
    font-size:20px;
    margin-top: 5px;
`
export const Total = styled.Text`
    font-size:20px;
    margin-top;5px;
`
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    `
export const Category = styled.View`
    flex-direction: row;
    align-items: center;

`
export const Icon = styled(icon)`
    font-size:20px;
`
export const Date = styled(Icon)`
    font-size:16px;
`
export const CategoryName = styled.Text`
    font-size: 16px;
    margin-left: 12px;
`

