import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Campo } from '../../componentes/Formulario/Campo'
import { TransacaoBotao } from '../../componentes/Formulario/TransacaoBotao'
import { CategoriaSelecaoBotao } from '../../componentes/Formulario/CategoriaSelecaoBotao'
import { Botao } from '../../componentes/Formulario/Botao'

import { CategoriaSelecao } from '../CategoriaSelecao'

import {
  Conteiner,
  Titulo,
  Cabecalho,
  Form,
  CamposConteiner,
  TransacaoTipos
} from './estilos'


export function Cadastro() {

  const [transacaoTipo, setTransacaoTipo] = useState('')
  const [categoriaModal, setCategoriaModal] = useState(false)
  const [categoria, setCategoria] = useState({
    chave: 'categoria',
    nome: 'Categoria',
    icone: 'list'
  })

  function abrirCategoriaModal(){
    setCategoriaModal(true)
  }

  function fecharCategoriaModal(){
    setCategoriaModal(false)    
  }

  function transacaoTipoSelecao(tipo: 'positivo' | 'negativo') {
    setTransacaoTipo(tipo)
  }

  return (
      <Conteiner>
        <Cabecalho>
          <Titulo>Cadastro</Titulo>
        </Cabecalho>

        <Form>
          <CamposConteiner>
            <Campo            
              textoCampo="Nome"
              tipoTeclado="default"
            />
            <Campo
              textoCampo="Valor"
              tipoTeclado="numeric"
            />

            <TransacaoTipos>

              <TransacaoBotao
                titulo="Entrada"
                tipo="up"
                definirTipo={() => transacaoTipoSelecao("positivo")}
                ativo={transacaoTipo === "positivo"}
              />
              <TransacaoBotao
                titulo="Saída"
                tipo="down"
                definirTipo={() => transacaoTipoSelecao("negativo")}
                ativo={transacaoTipo === "negativo"}
              />
              
            </TransacaoTipos>

            <CategoriaSelecaoBotao
              icone={categoria.icone}
              titulo={categoria.nome}
              abrirModal={abrirCategoriaModal}
            />
          </CamposConteiner>

          <Botao titulo="Enviar" onPress={() => {}}/>

        </Form>

        <Modal visible={categoriaModal}>
          <CategoriaSelecao 
            categoria={categoria}
            selecionarCategoria={setCategoria}
            fechar={fecharCategoriaModal}
          />
        </Modal>

      </Conteiner>
  )
}
