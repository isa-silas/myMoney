import React, {useState} from "react"
import {Container,Icon,Name,Header,Title,Footer,SendBtn,LabelBtn,ContainerBtn,List,CategoryBtn} from "./style"
import {categories} from '../../utils/categories'

interface CategoryProps{
    key: string
    name: string
    icon: string
}

interface Props{
    category: CategoryProps
}


export function Category({category}:CategoryProps){
    return(
        <Container>
            <Header>
                <Title></Title>
            </Header>

            <List
            data = {categories}
            keyExtractor={(item)=>item.key}
            renderItem={({item})=>{
                <CategoryBtn>
                    <Icon name={item.icon}/>
                    <Name>{item.name}</Name>
                </CategoryBtn>

            }
        }
            />
            <Footer>
            <ContainerBtn>
                {/* <SendBtn
                icone={"trash"}
                titulo={"Select"}
                onPress={() => { }}
                >
                    <LabelBtn>Send</LabelBtn>
                </SendBtn> */}
            </ContainerBtn>
            </Footer>
        </Container>
    )
}