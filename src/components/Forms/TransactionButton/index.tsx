import React from 'react'

import { 
  Container, 
  Title, 
  Icon, 
  Button 
} from './style'

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
    <Container active={ativo} type={tipo}>
      <Button onPress={definirTipo}>
        <Icon name={icones[tipo]} type={tipo} />
        <Title>{titulo}</Title>
      </Button>
    </Container>
  )
}
