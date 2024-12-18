import { useCallback, useEffect } from 'react';
import { notification } from 'antd';

const Toast = ({ open }: { open: boolean }) => {
    const [api, contextHolder] = notification.useNotification();

    const handleNotification = useCallback(() => {        
        api['error']({
            message: 'Problemas para carregar a página',
            description: 'Erro ao fazer requisição, por favor recarregue a página.',
        });
    }, [api]);

    useEffect(() => {
        if (open) {
            handleNotification();
        }
    }, [handleNotification, open]);    

    return (
        <>
            {contextHolder}
            <span data-testid='Toast' />
        </>
    );
}

export default Toast;