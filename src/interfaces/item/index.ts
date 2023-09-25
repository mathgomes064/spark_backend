// export interface IItemCreate{
//     descricao: string;
//     quantidade: number;
//     tipo_item_id: string;
//     compartimento_id: string
// }

export interface IItemCreate{
    descricao: string;
    quantidade: number;
    tipo_item_id: string;
    inputs: any[]
    compartimentoId: string
}

export interface IItemUpdate{
    descricao?: string;
    quantidade?: number;
    tipo_item_id?: string;
    compartimentoId?: string
}