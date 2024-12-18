import { Layout } from 'antd';
const { Header: HeaderAntD } = Layout;
import { Content } from './styles';
import logo from '../../assets/images/TechBizlogo.webp'

const Header = () => {
    return (
        <Content>
            <HeaderAntD className='header'>
                <img src={logo} />
            </HeaderAntD>
        </Content>        
    )
};

export default Header;