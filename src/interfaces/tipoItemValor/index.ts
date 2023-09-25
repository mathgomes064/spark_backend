export interface ITipoItemValorCreate{
    id: string,
    valor: string;
    excluido: boolean;
    tipo_item_atributo_id: string
}

export interface ITipoItemValorUpdate{
    id: string,
    valor?: string;
    excluido?: boolean;
    tipo_item_atributo_id?: string;
}