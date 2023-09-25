export interface IProprietarioCreate{
    id: string;
    tipo_pessoa: string;
    nome: string;
    cpf_cnpj: string;
    email: string;
    celular: string;
}

export interface IProprietarioUpdate{
    tipo_pessoa?: string;
    nome?: string;
    cpf_cnpj?: string;
    email?: string;
    celular?: string;
}