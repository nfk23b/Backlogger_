import { ContentArea, FullWidthContainer, Sidebar } from '@src/index';

export default () => {

    return (
        <FullWidthContainer>
            <Sidebar />
            <ContentArea />
        </FullWidthContainer>
    );
};