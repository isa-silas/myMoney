import styled,{css} from "styled-components/native";
import IconPanel from 'react-native-vector-icons/FontAwesome5'


interface iconType{
    type: 'income'|'outcome'|'total'
}

export const Container = styled.View<iconType>`
    width:300px;
    border-radius: 5px;
    padding: 20px;
    margin: 16px;
    background-color: ${({type})=>type==='total'?'#90e0ef':'#fff'};
`
export const Icon = styled(IconPanel)<iconType>`
    font-size: 18px;
    
    ${({type})=> type === 'income' && css`
        color:#38B000
        `
    }
    ${({type})=> type === 'outcome' && css`
        color:#E5383B
        `
    }
    ${({type})=> type === 'total' && css`
        color:#fff
        `
    }

    `
export const Header = styled.View`
   flex-direction:row;
   justify-content:space-between;
   align-items:center;
   padding-bottom:35px;
`
export const Title = styled.Text<iconType>`
    font-size:15px;
    font-weight:bold;
    color: ${({type})=>type=='total'?'#fff':'#000'};
    `
    export const Footer = styled.View`
    
    `
    export const Total = styled.Text<iconType>`
    font-size:30px;   
    font-weight:bold;
    color: ${({type})=>type=='total'?'#fff':'#000'};
`
export const LastTransaction = styled.Text<iconType>`
    color: ${({type})=>type=='total'?'#fff':'#000'};
`

