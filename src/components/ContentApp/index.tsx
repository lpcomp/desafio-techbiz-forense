import { Breadcrumb, Layout } from 'antd';
const { Content: ContentAntD } = Layout;
import ContentSearch from '../ContentSearch';
import { Content } from './styles';

const ContentApp = () => {
    return (
        <Content data-testid='content-search'>
            <Layout className='layout-father full-height-content'>
                <Layout className='layout-child padding-layout'>
                    <Breadcrumb
                        items={[{ title: 'Home' }, { title: 'filtro' }, { title: 'Usuário por CPF' }]}                        
                        className='breadcrumb'
                    />
                    <ContentAntD
                        className='warp-content-search'                        
                    >
                        <ContentSearch />
                    </ContentAntD>
                </Layout>
            </Layout>
        </Content>        
    )
};

export default ContentApp;