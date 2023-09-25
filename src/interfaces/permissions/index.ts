export interface IPermissionCreate{
    visualizar: boolean;
    editar: boolean;
    adicionar: boolean;
    deletar: boolean;
    tabela: string; 
    user_id: string;
}

export interface IPermissionUpdate{
    id: string
    // visualizar?: boolean;
    // editar?: boolean;
    // adicionar?: boolean;
    // deletar?: boolean;
    // tabela?: string; 
}