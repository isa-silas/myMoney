import React from "react"

import{
    Conteiner,
    Titulo,
    Total,
    Rodape,
    Categoria,
    Icone,
    CategoriaNome,
    Data
} from './estilo'


interface CategoriaIcone {
    nome: string
    icone: string
}

export interface TransacaoProps {
    id: string
    tipo: 'positivo' | 'negativo'
    titulo: string
    total: string
    categoria: CategoriaIcone
    data: string
}

interface Props {
    lancamento: TransacaoProps
}

export function Transacao({ lancamento }: Props ){
    return(
        <Conteiner>
            <Titulo>{lancamento.titulo}</Titulo>
            <Total>{lancamento.total}</Total>
            <Rodape>
                <Categoria>
                    <Icone name={lancamento.categoria.icone} />
                    <CategoriaNome>{lancamento.categoria.nome}</CategoriaNome>
                </Categoria>
                <Data>{lancamento.data}</Data>
            </Rodape>
        </Conteiner>
    )
}