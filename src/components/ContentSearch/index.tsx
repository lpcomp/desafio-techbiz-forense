import { useEffect, useState } from 'react';
import { Content } from './styles';
import Header from './components/Header';
import { Tabs } from 'antd';
import getUserForCPF from '../../services/getUserForCPF';
import Loading from '../Loading';
import { ContentState } from '../../models/app';
import Toast from '../Toast';
import useTabItems from './scripts/tabItems';

const ContentSearch = () => {
    const { tabItems, setTabItems } = useTabItems();
    const [contentState, setContentState] = useState<ContentState>('Loading');
    const [showToast, setShowToast] = useState<boolean>(false);    

    useEffect(() => {
        getUserForCPF().then((data) => {
            setTabItems(data);
            setContentState('Default');
        }).catch(() => {
            setShowToast(true);
        })
    }, [setTabItems]);

    return (
        <Content>
            {contentState === 'Loading' ? (
                <Loading />
            ): (
                <>
                    <Header />
                    <Tabs
                        type="card"
                        className='tabs-search'
                        items={tabItems}
                    />
                </>
            )}
            <Toast open={showToast} />
        </Content>
    )
}

export default ContentSearch;