import React from 'react'
import { Container } from './style'

export function Field({ txtField, keyboardType }) {
  return <Container 
            placeholder={txtField} 
            keyboardType={keyboardType}
          />
}