export interface IGrupoItemCreate{
    id: string;
    descricao: string;
    excluido: boolean;
    grupo_id: string;
}

export interface IGrupoItemUpdate{
    descricao?: string;
}