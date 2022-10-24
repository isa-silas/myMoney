import React from "react"
import { FlatList } from 'react-native'

import { Conteiner,
         Cabecalho,
         Titulo,
         Rodape,
         Categoria,
         Icone,
         Nome,
         Separador
} from './estilos'
import { Botao } from '../../componentes/Formulario/Botao'

import { categorias } from '../../utils/categorias'

interface CategoriaProps{
    chave: string   
    nome: string
    icone: string
}

interface Props{
    categoria: CategoriaProps
    selecionarCategoria: (categoria: CategoriaProps) => void
    fechar: () => void
}

export function CategoriaSelecao({categoria, selecionarCategoria, fechar}: Props){
    return(
        <Conteiner>
            <Cabecalho>
                <Titulo>Categorias</Titulo>
            </Cabecalho>

            <FlatList 
                data={categorias}
                keyExtractor={(item) => item.chave}
                renderItem ={({ item }) => (
                    <Categoria 
                        onPress={ () => selecionarCategoria(item) }
                        ativo={categoria.chave == item.chave}
                    >
                        <Icone name={item.icone} />
                        <Nome>{item.nome}</Nome>
                    </Categoria>
                )}
                ItemSeparatorComponent={() => <Separador />}
            />

            <Rodape>
                <Botao 
                    titulo="Selecionar" 
                    onPress={fechar}
                />
            </Rodape>

        </Conteiner>
    )
}