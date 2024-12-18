import { maskCPF, maskPhone } from "./applyMask";

describe('maskCPF', () => {
  it('deve formatar o CPF corretamente', () => {
    const cpf = '12345678909';
    const result = maskCPF(cpf);
    expect(result).toBe('123.456.789-09');
  });

  it('deve remover caracteres não numéricos', () => {
    const cpf = '123.456.789-09';
    const result = maskCPF(cpf);
    expect(result).toBe('123.456.789-09');
  });

  it('deve retornar uma string vazia se o CPF não for válido', () => {
    const cpf = 'abc';
    const result = maskCPF(cpf);
    expect(result).toBe('');
  });
});

describe('maskPhone', () => {
  it('deve formatar números de telefone de 10 dígitos corretamente', () => {
    const phone = '1234567890';
    const result = maskPhone(phone);
    expect(result).toBe('(12) 3456-7890');
  });

  it('deve formatar números de telefone de 11 dígitos corretamente', () => {
    const phone = '12345678901';
    const result = maskPhone(phone);
    expect(result).toBe('(12) 34567-8901');
  });

  it('deve formatar números de telefone de 12 dígitos corretamente', () => {
    const phone = '123456789090';
    const result = maskPhone(phone);
    expect(result).toBe('+12 (34) 5678-9090');
  });

  it('deve formatar números de telefone de 13 dígitos corretamente', () => {
    const phone = '1234567890123';
    const result = maskPhone(phone);
    expect(result).toBe('+12 (34) 56789-0123');
  });

  it('deve retornar o número de telefone original se o formato não for reconhecido', () => {
    const phone = '123';
    const result = maskPhone(phone);
    expect(result).toBe('123');
  });

  it('deve remover caracteres não numéricos antes de formatar', () => {
    const phone = '(12) 3456-7890';
    const result = maskPhone(phone);
    expect(result).toBe('(12) 3456-7890');
  });
});
