export interface IQuadroCreate{
     quadro_descricao: string;
     tipo_qgbt: string;
     tamanho_qgbt: string;
     quantidade_circuito: number;
     monofasico: number;
     bifasico: number;
     trifasico: number;
     disjuntor_principal: string;
     polos: string;
     possui_dps: string;
     quantidade_dps: string;
     compartimento_id: string;
     dps_tipo_id: string;
}

export interface IQuadroUpdate{
    quadro_descricao?: string;
    tipo_qgbt?: string;
    tamanho_qgbt?: string;
    quantidade_circuito?: number;
    monofasico?: number;
    bifasico: number;
    trifasico: number;
    disjuntor_principal?: string;
    polos?: string;
    possui_dps?: string;
    quantidade_dps?: string;
    dps_tipo_id?: string;
}