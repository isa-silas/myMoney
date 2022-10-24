import React from 'react'
import { Conteiner, Titulo } from './estilos'

interface Props {
  titulo: string
  onPress: () => void
}

export function Botao({ titulo, onPress }: Props) {
  return (
    <Conteiner onPress={onPress}>
      <Titulo>{titulo}</Titulo>
    </Conteiner>
  )
}
