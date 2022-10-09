import router from '@src/router';
import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { reset } from 'stitches-reset';

import { globalCss } from '~stitches';

globalCss(reset)();

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
