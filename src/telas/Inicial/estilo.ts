import styled from 'styled-components/native'
import icone from 'react-native-vector-icons/FontAwesome5'

export const Conteiner = styled.View`
    flex: 1;
    background-color: #EAEBEB;
`
export const Cabecalho = styled.View`
    width: 100%;
    height: 200px;
    background-color: #49081F;
`

export const UsuarioConteiner = styled.View`
    width: 100%;
    padding: 12px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const UsuarioInformacoes = styled.View`
    flex-direction: row;
`
export const Foto = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 5px;
`
export const Usuario = styled.View`
    margin-left: 18px;
`
export const UsuarioMensagem = styled.Text`
    color: #fff;
    font-size: 18px;
`
export const UsuarioNome = styled.Text`
    color: #fff;
    font-size: 18px;
`
export const Icone = styled(icone)`
    color: #fff;
    font-size: 28px;
`
export const Paineis = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    width: 100%;
    position: absolute;
    margin-top: 75px;
`
export const Transacoes = styled.FlatList``