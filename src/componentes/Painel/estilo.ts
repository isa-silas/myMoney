import styled, {css} from "styled-components/native";
import icon from 'react-native-vector-icons/FontAwesome5'

interface tipoIcone {
    tipo: 'entrada' | 'saida' | 'total'
}

export const Conteiner = styled.View<tipoIcone>`

    background-color: ${({ tipo }) => tipo == 'total' ? '#E85D04' : '#fff'};
    width: 300px;
    border-radius: 5px;
    padding: 20px;
    margin: 12px;
`

export const Cabecalho = styled.View`
    margin-top: 6px;
    flex-direction: row;
    justify-content: space-between;
`

export const Titulo = styled.Text<tipoIcone>`
    font-size: 18px;
    font-weight: 600;
    color: ${({ tipo }) => tipo == 'total' ? '#fff' : '#000'};
`

export const Icone = styled(icon)<tipoIcone>`
    font-size: 28px;

    ${({ tipo }) => tipo === 'entrada' && css`
        color: #38B000
    `}
    
    ${({ tipo }) => tipo === 'saida' && css`
        color: #E5383B
    `}

    ${({ tipo }) => tipo === 'total' && css`
        color: #fff
    `}
`

export const Rodape = styled.View`
    margin-top: 36px;
    margin-bottom: 6px;
`

export const Total = styled.Text<tipoIcone>`
    font-size: 36px;
    font-weight: 600;
    color: ${({ tipo }) => tipo == 'total' ? '#fff' : '#000'};
`

export const UltimaTransacao = styled.Text<tipoIcone>`
    font-size: 16px;
    color: ${({ tipo }) => tipo == 'total' ? '#fff' : '#000'};
`