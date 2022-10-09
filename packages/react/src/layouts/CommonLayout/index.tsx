import { HasReactNode } from '@src/common/type';

import { LayoutWrapper } from './style';

const CommonLayout = ({ children }: HasReactNode) => {
    return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default CommonLayout;
