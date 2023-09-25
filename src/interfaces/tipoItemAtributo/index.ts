export interface ITipoItemAtributoCreate{
    descricao: string;
    selecionavel: string;
    unidade: string;
    sigla: string;
    excluido: boolean;
    tipo_item_id: string;
}

export interface ITipoItemAtributoUpdate{
    descricao?: string;
    selecionavel?: string;
    unidade?: string;
    sigla?: string;
}