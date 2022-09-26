import React from 'react';
import { Container, Footer, Header, Icon, LastTransaction, Title, Total } from './style';

interface Props {
    title: string;
    total: string;
    lastTransaction:string;
    icon:string;
}

export function Panel({title,total,lastTransaction,icon}: Props) {
    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                <Icon name={icon}/>
            </Header>
            <Footer>
                <Total>{total}</Total>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}