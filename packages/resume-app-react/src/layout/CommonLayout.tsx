import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '@/components/Menu';

const CommonLayout = () => {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    );
};

export default CommonLayout;
