import React from 'react'
import { Container,
    Category,
    Icon,
    CategorySelect,
    IconFeather } from './style'

interface Props {
    title: string
    icon: string | null
    onPress: () => void
}

export function SelectButton({
    title,
    icon,
    onPress,
    ...rest
}: Props) {
    return (
        <Container>
            <CategorySelect>
                {icon && <IconFeather name={icon} />}
                <Category>{title}</Category>
            </CategorySelect>
            <Icon name={'keyboard-arrow-down'} />
        </Container>
    )
}