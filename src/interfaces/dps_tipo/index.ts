export interface IDpsCreate{
    classe: string;
    corrente: string;
    tensao: string;
}

export interface IDpsUpdate{
    classe?: string;
    corrente?: string;
    tensao?: string;
}