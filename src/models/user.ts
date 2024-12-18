

export interface Phone {
    "operadora"?: string;
    "phone number": string;
    "whatsapp"?: "Sim" | "Nao";
}

export interface Address {
    "area": string;
    "area code"?: string;
    "bairro": string;
    "city": string;
    "complemento"?: string;
    "endereco": string;
    "nome"?: string;
    "numero"?: string;
    "cep ou zipcode"?: string;
    "logradouro"?: string;
}

export type Location = Address

export interface Email {
    "email address": string;
}

export interface Workplace {
    "cnpj": string;
    "vinculo": "emprego" | "sociedade";
    "renda"?: string;
    "admissao"?: string;
    "endereco": Address[];
    "telefone"?: Phone[];
    "razao social": string;
}

export interface User {
    "cpf"?: string;
    "ctps"?: string;
    "data nascimento"?: string;
    "first names": string;
    "full name": string;
    "vinculo"?: "IRMAO(A)" | "PAI" | "MAE" | "SOCIO(A)" | "OUTROS CONTATOS";
    "endereco"?: Address[];
    "location"?: Location[];
    "telefone"?: Phone[];
    "procon"?: string;
    "sexo"?: "M" | "F";
    "surname"?: string;
    "titulo de eleitor"?: string;
    "bookmark"?: "true";
    "cidade_nascimento"?: string;
    "estado_nascimento"?: string;
    "pais_nascimento"?: string;
    "nacionalidade"?: string;
    "profissao"?: string;
    "escolaridade"?: string;
    "idade"?: string;
    "identidade"?: string;
    "pis/pasep"?: string;
    "status receita"?: string;
}

interface SNAP {
    email?: Email[];
    empresa?: Workplace[];
    endereco?: Address[];
    pessoa?: User[];
    telefone?: Phone[];
}
  
export interface UserForCPF {
    SNAP: SNAP[];
}

export interface UserCPFInformation {
    email?: Email[],
    address?: Address[],
    phone?: Phone[],
    user?: User
}