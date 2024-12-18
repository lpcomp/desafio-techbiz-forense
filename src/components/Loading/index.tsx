import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Content } from './styles';

const Loading = () => {
    return (
        <Content>
            <Spin indicator={<LoadingOutlined spin />} size="large" className='loading' data-testid='loading-icon' />
        </Content>        
    )
}

export default Loading;