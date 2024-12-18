import { Typography } from 'antd';

const Header = () => {
    const { Title, Paragraph } = Typography;
    
    return (
        <Typography className='title'>
            <Title>Pesquisa por CPF</Title>

            <Paragraph>
                Encontre dados como telefones, endereços, e-mails, locais de trabalho e pessoas próximas do usuário pesquisado.
            </Paragraph>
        </Typography>
    )
}

export default Header;