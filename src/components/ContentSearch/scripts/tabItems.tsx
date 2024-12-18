import { useState } from 'react';
import type { TabsProps } from 'antd';
import { UserForCPF } from '../../../models/user';
import UserDescription from '../../UserDescription';
import WorkplaceDescription from '../../WorkplaceDescription';
import ClosePeopleDescription from '../../ClosePeopleDescription';

const useTabItems = () => {
    const [userForCPFData, setUserForCPFData] = useState<UserForCPF>();

    const setTabItems = (data: UserForCPF) => {
        setUserForCPFData(data);
    }

    const tabItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Usuário',
            children: <UserDescription data={userForCPFData} />,
        },
        {
            key: '2',
            label: 'Empresa',
            children: <WorkplaceDescription data={userForCPFData} />,
        },
        {
            key: '3',
            label: 'Pessoas próximas',
            children: <ClosePeopleDescription data={userForCPFData} />,
        },
    ];

    return {
        tabItems,
        setTabItems
    }
}

export default useTabItems;