import React from 'react'
import {
  Conteiner,
  Categoria,
  Icone,
  CategoriaSelecao,
  IconeLista
} from './styles'


interface Props {
  titulo: string
  icone: string | null
  abrirModal: () => void
}

export function CategoriaSelecaoBotao({ 
  titulo, 
  icone, 
  abrirModal 
}: Props) {
  return (
    <Conteiner onPress={abrirModal}>

      <CategoriaSelecao>
        <IconeLista name={icone} />
        <Categoria>{titulo}</Categoria>
      </CategoriaSelecao>

      <Icone name={'chevron-down'} />

    </Conteiner>
  )
}
