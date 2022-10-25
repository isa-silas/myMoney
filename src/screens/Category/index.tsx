import React, { useState } from "react"
import { FlatList } from 'react-native'
import { Container,Separator, Icon, Name, Header, Title, Footer, SendBtn, LabelBtn, ContainerBtn, List, CategoryBtn } from "./style"
import { categories } from '../../utils/categories'
import { Button } from "../../components/Forms/Button1"


interface CategoryProps {
    key: string
    name: string
    icon: string
}

interface Props {
    category: CategoryProps
    selectCategory: (category: CategoryProps) => void
    close: () => void
}


export function Category({ category, selectCategory, close }: Props) {
    return (
        <Container>
            <Header>
                <Title>Categories</Title>
            </Header>

            <FlatList
                data={categories}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <CategoryBtn
                        onPress={() => selectCategory(item)}
                        active={category.key == item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </CategoryBtn>

                )}
                ItemSeparatorComponent={() => <Separator />}
            />
            <Footer>
                <Button
                    title="Select"
                    onPress={close}
                />
            </Footer>
        </Container>
    )
}