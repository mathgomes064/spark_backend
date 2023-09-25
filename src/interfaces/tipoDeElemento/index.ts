export interface ITipoItemCreate{
    descricao: string;
    linha: string;
    excluido: boolean;
    grupo_id: string;
}

export interface ITipoItemUpdate{
    descricao?: string;
    linha?: string;
    grupo_id?: string

}