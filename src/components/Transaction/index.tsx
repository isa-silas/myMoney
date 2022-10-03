import React from "react"
import {
    Title,
    Total,
    Footer,
    Category,
    Icon,
    CategoryName,
    Container,
    Date
} from "./style"


interface CategoryIcon {
    name: string;
    icon: string;
}

export interface TransactionProps {
    id: string;
    type: 'positive' | 'negative';
    title: string;
    total: string;
    category: CategoryIcon;
    date: string;
}

interface Props{
    data: TransactionProps
}

export function Transaction({data}:Props){
    return(
        <Container>
            <Title>{data.title}</Title>
            <Total>{data.total}</Total>
            <Footer>
                <Category>
                    <Icon name={data.category.icon}/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}