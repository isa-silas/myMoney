import React from 'react'

import { 
    Conteiner,
    Cabecalho,
    Titulo,
    Icone,
    Rodape,
    Total,
    UltimaTransacao
} from './estilo'

interface Props {
    tipo: 'entrada' | 'saida' | 'total';
    titulo: string;
    total: string;
    ultimaTransacao: string;
}

const icones = {
    entrada: 'arrow-circle-up',
    saida: 'arrow-circle-down',
    total: 'dollar-sign'
}


export function Painel({ 
    tipo, 
    titulo, 
    total, 
    ultimaTransacao 
}: Props){
    return(
        <Conteiner tipo={tipo}>
            <Cabecalho>
                <Titulo tipo={tipo}>{titulo}</Titulo>
                <Icone 
                    name={icones[tipo]}
                    tipo={tipo}
                />
            </Cabecalho>

            <Rodape>
                <Total tipo={tipo}>{total}</Total>
                <UltimaTransacao tipo={tipo}>{ultimaTransacao}</UltimaTransacao>
            </Rodape>
        </Conteiner>
    )
}
