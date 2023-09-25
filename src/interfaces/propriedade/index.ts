export interface IPropriedadeCreate{
    nome: string;
    numero: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento: string;
    cep: string;
    proprietario_id: string;
}

export interface IPropriedadeUpdate{
    nome?: string;
    numero?: string;
    logradouro?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    complemento?: string;
    cep?: string;
    proprietario_id?: string;
}