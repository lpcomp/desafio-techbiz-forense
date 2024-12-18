import { useState, useEffect } from 'react';
import { Descriptions, Divider } from 'antd';
import { UserCPFInformation, UserForCPF } from '../../models/user';
import userCPFInformation from '../../utils/userCPFInformation';
import { userItems, emailItems, phoneItems, addressItems } from '../../utils/itemsDescription';

const UserDescription = ({ data }: { data?: UserForCPF}) => {
    const [userInfo, setUserInfo] = useState<UserCPFInformation>();

    useEffect(() => {
        if (data) {
            setUserInfo(userCPFInformation(data));
        }
    }, [data]);

    return (
        <>
            <Descriptions title="Dados do usuário" className='title-descriptions' bordered items={userItems(userInfo?.user)} />
            <Divider />
            <Descriptions title="Telefones" className='title-descriptions' bordered items={phoneItems(userInfo?.phone)} />
            <Divider />
            <Descriptions title="E-mails" className='title-descriptions' bordered items={emailItems(userInfo?.email)} />
            <Divider />
            <Descriptions title="Endereços" className='title-descriptions' bordered items={addressItems(userInfo?.address)} size='middle'/>
        </>
    )
}

export default UserDescription;