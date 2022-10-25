import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Field } from '../../components/Forms/Field'
import { TransactionButton } from '../../components/Forms/TransactionButton'
import { SelectButton } from '../../components/Forms/SelectButton'
import { Button } from '../../components/Forms/Button1'

import { Category } from '../Category'

import {
  Container,
  Title,
  Header,
  Form,
  FieldsContainer,
  TransactionTypes
} from './style'


export function Register() {

  const [transactionType, setTransactionType] = useState('')
  const [categoryModal, setCategoryModal] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Category',
    icon: 'list'
  })

  function openCategoryModal(){
    setCategoryModal(true)
  }

  function closeCategoryModal(){
    setCategoryModal(false)    
  }

  function transactionTypeSelecao(type: 'positive' | 'negative') {
    setTransactionType(type)
  }

  return (
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <FieldsContainer>
            <Field            
              txtField="Name"
              keyboardType="default"
            />
            <Field
              txtField="Value"
              keyboardType="numeric"
            />

            <TransactionTypes>

              <TransactionButton
                title="Income"
                type="up"
                defineType={() => transactionTypeSelecao("positive")}
                active={transactionType === "positive"}
              />
              <TransactionButton
                title="Outcome"
                type="down"
                defineType={() => transactionTypeSelecao("negative")}
                active={transactionType === "negative"}
              />
              
            </TransactionTypes>

            <SelectButton
              icon={category.icon}
              title={category.name}
              openModal={openCategoryModal}
            />
          </FieldsContainer>

          <Button title="Send" onPress={() => {}}/>

        </Form>

        <Modal visible={categoryModal}>
          <Category
            category={category}
            selectCategory={setCategory}
            close={closeCategoryModal}
          />
        </Modal>

      </Container>
  )
}
