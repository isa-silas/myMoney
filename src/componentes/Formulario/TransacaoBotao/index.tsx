import React from 'react'

import { 
  Conteiner, 
  Titulo, 
  Icone, 
  Botao 
} from './estilos'

const icones = {
  up: 'arrow-circle-up',
  down: 'arrow-circle-down'
}

interface Props {
  tipo: 'up' | 'down'
  titulo: string
  ativo: boolean
  definirTipo: () => void
}

export function TransacaoBotao({
  titulo,
  tipo,
  ativo,
  definirTipo
}: Props) {
  return (
    <Conteiner ativo={ativo} tipo={tipo}>
      <Botao onPress={definirTipo}>
        <Icone name={icones[tipo]} tipo={tipo} />
        <Titulo>{titulo}</Titulo>
      </Botao>
    </Conteiner>
  )
}
