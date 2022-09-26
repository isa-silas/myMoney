import React from "react";
import { Text } from 'react-native';
import { Panel } from "../../components/Panel";
import { Container,Head,Panels,Transactions,
        UserContainer,UserInfo,UserMessage,User,UserName,Photo,IconApp } from "./style";

export function Home(){
    return(
        <Container>
            <Head>
                <UserContainer>
                    <UserInfo>
                        <Photo
                        source={{uri:'https://avatars.githubusercontent.com/u/89093682?v=4'}}
                        />
                        <User>
                            <UserMessage>Hello</UserMessage>
                            <UserName>Isabella</UserName>
                        </User>
                    </UserInfo>
                    <IconApp name="piggy-bank"/>
                </UserContainer>
            </Head>
            <Panels>
                <Panel
                    // type = "income"
                    title = "Income"
                    total="R$ 17.400,00"
                    lastTransaction="Last Income on September 20th"
                    icon = "arrow-circle-up"
                    />
                <Panel
                    // type = "outcome"
                    title = "Outcome"
                    total="R$ 7.328,43"
                    lastTransaction="Last Outcome on September 26th"
                    icon = "arrow-circle-down"
                    />
                <Panel
                    // type = "total"
                    title = "Total"
                    total="R$ 10.071,57"
                    lastTransaction="September 1th to 26th"
                    icon="dollar-sign"
                />
            </Panels>
            <Transactions>

            </Transactions>
        </Container>
    )
}