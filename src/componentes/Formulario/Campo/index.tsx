import React from 'react'
import { Conteiner } from './estilos'

export function Campo({ textoCampo, tipoTeclado }) {
  return <Conteiner 
            placeholder={textoCampo} 
            keyboardType={tipoTeclado}
          />
}
