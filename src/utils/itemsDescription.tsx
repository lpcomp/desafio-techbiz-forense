import { Badge, Tooltip } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';
import type { DescriptionsProps } from 'antd';
import { Phone, Address, Workplace, Email, User } from '../models/user';
import { maskCPF, maskPhone } from './applyMask';
import checkGender from './checkGender';

const phoneItems = (phones: Phone[] | undefined):DescriptionsProps['items'] | undefined => {
    const phoneItems: DescriptionsProps['items'] = phones?.map(
        (phone, index) => {
            return {
                key: index,
                label: `Telefone ${phone?.operadora ?? ''}`,
                children: (
                    <>
                        {phone?.whatsapp === "Sim" && (
                            <Tooltip title="Número com Whatsapp" className='whatsapp-icon'>
                                <WhatsAppOutlined />
                            </Tooltip>                            
                        )}
                        {maskPhone(phone['phone number'])}
                    </>
                )
            }
        },
    );

    return phoneItems;
}

const addressItems = (address: Address[] | undefined):DescriptionsProps['items'] | undefined => {
    

    const addressItems: DescriptionsProps['items'] = address?.map(
        (address, index) => {
            return {
                key: index,
                label: `Endereço na cidade ${address.city}`,
                children: (
                    
                        <ul className='remove-style-list'>
                            <li>CEP: {address['area code'] ?? '--'}</li>
                            <li>UF: {address.area ?? '--'}</li>
                            <li>Bairro: {address.bairro ?? '--'}</li>
                            <li>RUA: {address.logradouro ?? '--'}</li>
                            <li>Complemento: {address.complemento ?? '--'}</li>
                        </ul>
                )
            }
        },
    );

    return addressItems;
}

const emailItems = (emails: Email[] | undefined):DescriptionsProps['items'] | undefined => {
    const emailItems: DescriptionsProps['items'] = emails?.map(
        (email, index) => {
            return {
                key: index,
                label: `E-mail ${index + 1}`,
                children: email['email address']
            }
        },
    );

    return emailItems;
}

const workplaceItems = (workplace: Workplace | undefined):DescriptionsProps['items'] | undefined => {
    const worplaceItems: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Razão social',
            children: workplace?.['razao social'],
        },
        {
            key: '2',
            label: 'CNPJ',
            children: workplace?.cnpj,
        },
        {
            key: '3',
            label: 'Vinculo',
            children: workplace?.vinculo,
        },
        {
            key: '4',
            label: 'Admissão',
            children: workplace?.admissao,
        },
        {
            key: '5',
            label: 'Renda',
            children: workplace?.renda,
        },
    ];

    return worplaceItems;
}

const userItems = (user: User | undefined):DescriptionsProps['items'] | undefined => {
    const userItems: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Nome',
            children: user?.['full name'],
        },
        {
            key: '2',
            label: 'CPF',
            children: maskCPF(user?.cpf ?? ''),
        },        
        {
            key: '3',
            label: 'Identidade',
            children: user?.identidade,
        },
        {
            key: '4',
            label: 'Data de nascimento',
            children: user?.['data nascimento'],
        },
        {
            key: '5',
            label: 'Idade',
            children: user?.idade,
        },
        {
            key: '6',
            label: 'Sexo',
            children: checkGender(user?.sexo),
        },
        {
            key: '7',
            label: 'Cidade',
            children: user?.cidade_nascimento,
        },
        {
            key: '8',
            label: 'Estado',
            children: user?.estado_nascimento,
        },
        {
            key: '9',
            label: 'Nacionalidade',
            children: user?.nacionalidade,
        },
        {
            key: '10',
            label: 'Escolaridade',
            children: user?.escolaridade,
        },
        {
            key: '11',
            label: 'Status Receita',
            children: <Badge status="success" text={user?.['status receita']} />,
        },
        {
            key: '12',
            label: 'Profissão',
            children: user?.profissao,
        },
        {
            key: '13',
            label: 'CTPS',
            children: user?.ctps,
        },
        {
            key: '14',
            label: 'PIS/PASEP',
            children: user?.['pis/pasep'],
        },
        {
            key: '15',
            label: 'Título de eleitor',
            children: user?.['titulo de eleitor'],
        }        
    ];

    return userItems;
}

const closePeopleItems = (user: User | undefined):DescriptionsProps['items'] | undefined => {
    const closePeopleItems: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Nome',
            children: user?.['full name'],
        },
        {
            key: '2',
            label: 'CPF',
            children: maskCPF(user?.cpf ?? ''),
        },
        {
            key: '3',
            label: 'Data de nascimento',
            children: user?.['data nascimento'],
        },
        {
            key: '4',
            label: 'Sexo',
            children: checkGender(user?.sexo),
        },
        {
            key: '5',
            label: 'Vinculo',
            children: user?.vinculo,
        },        
        {
            key: '6',
            label: 'Procon',
            children: user?.procon,
        },
        {
            key: '7',
            label: 'Título de eleitor',
            children: user?.['titulo de eleitor'],
        }        
    ];

    return closePeopleItems;
}

export {
    phoneItems,
    addressItems,
    emailItems,
    workplaceItems,
    userItems,
    closePeopleItems
}