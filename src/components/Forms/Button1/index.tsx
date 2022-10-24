import React from 'react'
import { Container, Title } from './style'

interface Props {
  title: string
  onPress: () => void
}

export function Button({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  )
}