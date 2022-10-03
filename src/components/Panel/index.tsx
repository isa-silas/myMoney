import React from 'react';
import { Container, Footer, Header, Icon, LastTransaction, Title, Total } from './style';

interface Props {
    title: string;
    total: string;
    lastTransaction:string;
    type:'income'|'outcome'|'total';
}

const icons = {
    income: 'arrow-circle-up',
    outcome: 'arrow-circle-down',
    total: 'dollar-sign'
}
export function Panel({title,total,lastTransaction,type}: Props) {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon 
                name={icons[type]}
                type = {type}
                />
            </Header>
            <Footer type={type}>
                <Total type={type}>{total}</Total>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}