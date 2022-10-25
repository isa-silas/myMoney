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
  type: 'up' | 'down'
  title: string
  active: boolean
  defineType: () => void
}

export function TransactionButton({
  title,
  type,
  active,
  defineType
}: Props) {
  return (
    <Container active={active} type={type}>
      <Button onPress={defineType}>
        <Icon name={icones[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  )
}
