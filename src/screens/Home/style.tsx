// need to install npm install --save @types/styled-components-react-native
import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Container = styled.View`
    flex: 1;
    background-color: #e5e5e5;
`

export const Head = styled.View`
    width:100%;
    height: 200px;
    background-color: #03045e;
`
export const UserContainer = styled.View`
    width:100%;
    padding:18px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`
export const UserInfo = styled.View`
    flex-direction:row;
`
export const IconApp = styled(Icon)`
    // width:100%;
    height: 45px;
    color:#fff;
    font-size:40px;
    background-color: #03045e;
`
export const Photo = styled.Image`
    width:50px;
    height: 50px;
    border-radius:5px
`
export const User = styled.View`
    margin-left:18px;
`
export const UserMessage = styled.Text`
    width:100%;
    // height: 100px;
    background-color: #03045e;
    color:#fff;
`
export const UserName = styled.Text`
    width:100%;
    // height: 100px;
    background-color: #03045e;
    color:#fff;
`

export const Panels = styled.ScrollView.attrs({
    horizontal:true,
    showHorizontalScrollIndicator:false,
})`
    width:100%;
    // height: 200px;
    // background-color:#0077b6;
    // flex-direction:row;
    position:absolute;
    margin-top:75px;
`

// export const Transactions = styled.View`
//     // flex: 1;
//     background-color: #fff;
// `
export const Transactions = styled.FlatList``