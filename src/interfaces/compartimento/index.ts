export interface ICompartimentoCreate{
    id: string;
    descricao: string;
    largura: number;
    comprimento: number;
    andar_compartimento: number;
    edificio_id: string;
}

export interface ICompartimentoUpdate{
    descricao?: string;
    largura?: number;
    comprimento?: number;
    andar_compartimento?: number; 
    edificio_id?: string;
}