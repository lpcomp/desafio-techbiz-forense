import checkGender from './checkGender';

describe('checkGender', () => {
  it('deve retornar "Feminino" para gênero "F"', () => {
    const result = checkGender('F');
    expect(result).toBe('Feminino');
  });

  it('deve retornar "Masculino" para gênero "M"', () => {
    const result = checkGender('M');
    expect(result).toBe('Masculino');
  });

  it('deve retornar "--" para valor undefined', () => {
    const result = checkGender(undefined);
    expect(result).toBe('--');
  });

  it('deve retornar "--" para valor null', () => {
    const result = checkGender(null);
    expect(result).toBe('--');
  });
});