import React from "react";
import {
    Container, Header, RegisterInfo, RegisterPrice, RegisterName, Cards, Category, SendBtn, Title,
    Card, CardLabel, Icon, LabelBtn, ContainerBtn

} from "./style"

export function Register() {
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
                <SendBtn>
                    <LabelBtn>Send</LabelBtn>
                </SendBtn>
            </ContainerBtn>
        </Container>
    )
}