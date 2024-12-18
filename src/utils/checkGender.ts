
type GenderExit = 'Feminino' | 'Masculino' | '--';

enum Gender {
    'F' = 'Feminino',
    'M' = 'Masculino'
}

const checkGender = (gender: 'F' | 'M' | undefined):GenderExit => {
    return gender ? Gender[gender] : '--';
}

export default checkGender;