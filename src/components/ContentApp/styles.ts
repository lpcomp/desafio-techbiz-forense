import styled from 'styled-components';

export const Content = styled.div`
    .full-height-content {
        min-height: calc(100vh - 64px);
        height: 100%;        
    }

    .layout-father {
        .padding-layout {
            padding: 0 24px 24px;
        }

        .layout-child {
            max-width: 1280px;
            width: 100%;
            margin: 0 auto;

            .breadcrumb {
                margin: 16px 0;
            }

            .warp-content-search {                
                margin: 0;
                padding: 24px;
                min-height: 280px;
                border-radius: 8px;
                background-color: white;
            }
        }
    }
`;