const maskCPF = (cpf: string): string => {
    return cpf
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

const maskPhone = (phone: string): string => {
    const cleaned = phone.replace(/\D/g, '');

    const patterns: Record<number, string> = {
        10: '($1) $2-$3',
        11: '($1) $2-$3',
        12: '+$1 ($2) $3-$4',
        13: '+$1 ($2) $3-$4',
    };

    const regexes: Record<number, RegExp> = {
        10: /(\d{2})(\d{4})(\d{4})/,
        11: /(\d{2})(\d{5})(\d{4})/,
        12: /(\d{2})(\d{2})(\d{4})(\d{4})/,
        13: /(\d{2})(\d{2})(\d{5})(\d{4})/,
    };

    const pattern = patterns[cleaned.length];
    const regex = regexes[cleaned.length];
    
    return pattern && regex ? cleaned.replace(regex, pattern) : phone;
};

export {
    maskCPF,
    maskPhone
}