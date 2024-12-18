import { useEffect, useState } from 'react';
import { Content } from './styles';
import { Descriptions, Divider, Card } from 'antd';
import { UserForCPF, Workplace } from '../../models/user';
import { phoneItems, addressItems, workplaceItems } from '../../utils/itemsDescription';

const WorkplaceDescription = ({ data }: { data?: UserForCPF}) => {
    const [workplaceInfo, setWorkplaceInfo] = useState<Workplace[]>();

    useEffect(() => {
        if (data) {
            setWorkplaceInfo(data.SNAP[0].empresa);
        }
    }, [data]);    

    return (
        <>
            {workplaceInfo?.map(workplace => {
                return (
                    <Content key={workplace.cnpj}>
                        <Card className='worplace-cards'>
                            <Descriptions title={`Dados da empresa ${workplace['razao social']}`} className='title-descriptions' bordered items={workplaceItems(workplace)} />
                            <Divider />

                            {workplace.telefone && (
                                <>
                                    <Descriptions title="Telefones" className='title-descriptions' bordered items={phoneItems(workplace?.telefone)} />
                                    <Divider />
                                </>
                            )}
                            
                            {workplace.endereco && (
                                <Descriptions title="Endereços" className='title-descriptions' bordered items={addressItems(workplace?.endereco)} size='middle'/>
                            )}
                        </Card>                        
                    </Content>
                )
            })}            
        </>
    )
}

export default WorkplaceDescription;