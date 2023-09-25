export interface IItemAtributoCreate{
    descricao: string,
    selecionavel: string,
    unidade: string,
    sigla: string,
    item_id: string
}

export interface IItemAtributoUpdate{
    id?: string;
    descricao?: string,
    selecionavel?: string,
    unidade?: string,
    sigla?: string,
}