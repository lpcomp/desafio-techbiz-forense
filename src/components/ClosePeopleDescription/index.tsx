import { useState, useEffect } from 'react';
import { Content } from './styles';
import { Descriptions, Divider, List } from 'antd';
import { User, UserForCPF } from '../../models/user';
import usersWithoutBookmark from '../../utils/usersWithoutBookmark';
import { closePeopleItems, phoneItems, addressItems } from '../../utils/itemsDescription';

const ClosePeopleDescription = ({ data }: { data?: UserForCPF}) => {
    const itemsPerPage = 2;
    const [usersInfo, setUsersInfo] = useState<Array<User>>();

    useEffect(() => {
        if (data) {
            setUsersInfo(usersWithoutBookmark(data));
        }
    }, [data]);

    return (
        <Content>
            <List
                pagination={{                
                    pageSize: itemsPerPage,
                }}
                bordered
                dataSource={usersInfo}
                renderItem={(user) => (
                    <List.Item className='item-list'>                    
                        <section className='full-width'>
                            <Descriptions title={`Dados do usuário ${user['full name']}`} className='title-descriptions' bordered items={closePeopleItems(user)} />
                            
                            {user.telefone && (
                                <>
                                    <Divider />
                                    <Descriptions title="Telefones" className='title-descriptions' bordered items={phoneItems(user?.telefone)} />                                
                                </>
                            )}
                            
                            {(user.endereco || user.location) && (
                                <>
                                    <Divider />
                                    <Descriptions title="Endereços" className='title-descriptions' bordered items={addressItems(user?.endereco || user.location)} size='middle'/>
                                </>                            
                            )}
                        </section>                    
                    </List.Item>
                )}
            />
        </Content>
    )
}

export default ClosePeopleDescription;