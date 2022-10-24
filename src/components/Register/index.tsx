import React, { useState } from 'react'
import {Modal} from 'react-native'
import {
    Container, Header, RegisterInfo, RegisterPrice, RegisterName, Cards, CategoryComponent, SendBtn, Title,
    Card, CardLabel, Icon, LabelBtn, ContainerBtn

} from "./style"
import { SelectButton } from "../Forms/SelectButton/index"
import {Category} from "../../screens/Category"


export function Register() {
    const [categoria, setCategoria] = useState({
        chave: 'categoria',
        nome: 'Categoria',
        icone: 'list'
      })

    return (
        <Container>
            <Header>
                <Title>Registration</Title>
            </Header>
            <RegisterInfo>
                <RegisterName placeholder="Name"></RegisterName>
                <RegisterPrice placeholder="Price"></RegisterPrice>
                <Cards>
                    <Card>
                        <CardLabel>Income</CardLabel>
                        <Icon name="arrow-circle-up" color="green"></Icon>
                    </Card>
                    <Card>
                        <CardLabel>Outcome</CardLabel>
                        <Icon name="arrow-circle-down" color="red"></Icon>

                    </Card>
                </Cards>
                <Category />
            </RegisterInfo>
            <ContainerBtn>
            <SelectButton
                title={categoria.nome}
                icon={categoria.icone}
                onPress={() => { }} />
                <SendBtn>
                    <LabelBtn>Send</LabelBtn>
                </SendBtn>
            </ContainerBtn>
            <Modal visible={false}>
            <SelectButton
                title={categoria.nome}
                icon={categoria.icone}
                onPress={() => { }} />
            </Modal>
        </Container>
    )
}