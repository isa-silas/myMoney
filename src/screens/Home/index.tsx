import React from "react";
import { Text } from 'react-native';
import { Panel } from "../../components/Panel";
import { Transaction,TransactionProps } from "../../components/Transaction";
import {
    Container, Head, Panels,
    UserContainer, UserInfo, UserMessage, User, UserName, Photo, IconApp,Transactions
} from "./style";



export function Home() {

    const data: TransactionProps[] = [
        {   
            id:'1',
            type: 'positive',
            title: 'Salary',
            total: 'R$ 10.000,00',
            category: {
                name: 'Renda',
                icon: 'coins'
            },
            date: '03/10/2022'
        },
        {
           
            id:'2',
            type: 'negative',
            title: 'Madero',
            total: 'R$ 47,00',
            category: {
                name: 'Food',
                icon: 'hamburger'
            },
            date: '05/10/2022'
        },
        {
            id:'3',
            type: 'negative',
            title: 'GAP',
            total: 'R$ 100,00',
            category: {
                name: 'Clothing',
                icon: 'shopping-bag'
            },
            date: '11/10/2022'
        }
    ]
    
    return (
        <Container>
            <Head>
                <UserContainer>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/89093682?v=4' }}
                        />
                        <User>
                            <UserMessage>Hello</UserMessage>
                            <UserName>Isabella</UserName>
                        </User>
                    </UserInfo>
                    <IconApp name="piggy-bank" />
                </UserContainer>
            </Head>
            <Panels>
                <Panel
                    // type = "income"
                    title="Income"
                    total="R$ 17.400,00"
                    lastTransaction="Last Income on September 20th"
                    type="income"
                />
                <Panel
                    // type = "outcome"
                    title="Outcome"
                    total="R$ 7.328,43"
                    lastTransaction="Last Outcome on September 26th"
                    type="outcome"
                />
                <Panel
                    // type = "total"
                    title="Total"
                    total="R$ 10.071,57"
                    lastTransaction="September 1th to 26th"
                    type="total"
                />
            </Panels>
            <Transactions>
                data ={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <Transaction />}
            </Transactions>
        </Container>
    )
}