import React from 'react'
import { Container,
    Category,
    Icon,
    CategorySelect,
    IconFeather } from './style'

interface Props {
    title: string
    icon: string | null
    openModal: () => void
}

export function SelectButton({
    title,
    icon,
    openModal
}: Props) {
    return (
        <Container onPress={openModal}>
            <CategorySelect>
                {icon && <IconFeather name={icon} />}
                <Category>{title}</Category>
            </CategorySelect>
            <Icon name={'keyboard-arrow-down'} />
        </Container>
    )
}