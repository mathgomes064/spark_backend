export interface IEdificioCreate{
    id: string;
    nome: string;
    descricao: string;
    comprimento: number;
    pavimento: number;
    largura:number;
    subsolo:number;
    propriedade_id: string;
}

export interface IEdificioUpdate{
    nome?: string;
    descricao?: string;
    comprimento?: number;
    pavimento?: number;
    largura?:number;
    subsolo?:number;
    propriedade_id?: string;
}