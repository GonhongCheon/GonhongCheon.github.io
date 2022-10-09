import CommonLayout from '@src/layouts/CommonLayout';
import MainPage from '@src/pages';
import { RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
    {
        element: (
            <CommonLayout>
                <MainPage />
            </CommonLayout>
        ),
        path: '/',
    },
];

const router = createBrowserRouter(routes, {
    basename: '/product/react/',
});

export default router;
