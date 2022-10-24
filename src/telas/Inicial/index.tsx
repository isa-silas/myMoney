import React from 'react'
import { Painel } from '../../componentes/Painel'
import { Transacao, TransacaoProps } from '../../componentes/Transacao'

import { 
    Conteiner, 
    Cabecalho,
    UsuarioConteiner,
    UsuarioInformacoes,
    Foto,
    Usuario,
    UsuarioMensagem,
    UsuarioNome,
    Icone,
    Paineis,
    Transacoes 
} from './estilo'

export function Inicial(){

    const dados: TransacaoProps[] = [
        {
            id: '1',
            tipo: 'positivo',
            titulo: 'Salário',
            total: 'R$ 10.000,00',
            categoria: {
                nome: 'Renda',
                icone: 'coins'
            },
            data: '03/10/2022'            
        },
        {
            id: '2',
            tipo: 'negativo',
            titulo: 'Lanche',
            total: 'R$ 60,00',
            categoria: {
                nome: 'Alimentação',
                icone: 'coffe'
            },
            data: '05/10/2022'            
        },
        {
            id: '3',
            tipo: 'negativo',
            titulo: 'Aluguel',
            total: 'R$ 1.500,00',
            categoria: {
                nome: 'Casa',
                icone: 'shopping-bag'
            },
            data: '10/10/2022'            
        },
        {
            id: '4',
            tipo: 'negativo',
            titulo: 'Combutivel',
            total: 'R$ 250,00',
            categoria: {
                nome: 'Transporte',
                icone: 'side-bar'
            },
            data: '12/10/2022'            
        }
    ]

    return(
        <Conteiner>

            <Cabecalho>
                <UsuarioConteiner>
                    <UsuarioInformacoes>
                        <Foto 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/60670064?v=4' }} 
                        />
                        <Usuario>
                            <UsuarioMensagem>Olá,</UsuarioMensagem>
                            <UsuarioNome>Ralfe</UsuarioNome>
                        </Usuario>
                    </UsuarioInformacoes>
                    <Icone name="power-off"/>
                </UsuarioConteiner>
            </Cabecalho>

            <Paineis>

                <Painel 
                    tipo="entrada" 
                    titulo="Entrada"
                    total="R$ 17.400,00"
                    ultimaTransacao="Última entrada dia 10 de setembro"
                />

                <Painel 
                    tipo="saida"
                    titulo="Saida"
                    total="R$ 1.259,00"
                    ultimaTransacao="Última saida dia 23 de setembro"
                />

                <Painel 
                    tipo="total"
                    titulo="Total"
                    total="R$ 16.141,00"
                    ultimaTransacao="01 a 26 de setembro"
                />

            </Paineis>

            <Transacoes>
                data={dados}
                keyExtrator={item => item.id}
                renderItem={ ({ item }) => <Transacao lancamento={item} />  }
            </Transacoes>

        </Conteiner>
    )
}