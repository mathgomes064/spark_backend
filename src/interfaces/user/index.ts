export interface IUserCreate{
    id: string;
    name: string;
    telefone: string;
    email: string;
    password: string;
    confirmPassword: string;  
    cpf: string;
}

export interface IUserUpdate{
    name?: string;
    telefone?: string;
    email?: string;
    senha?: string;
    cpf?: string;
}

export interface IUserLogin{
    email: string;
    password: string;
}