import React from 'react';
import { Outlet } from 'react-router-dom';

function Display(): React.ReactElement {
    return (
        <>
            <Outlet />
        </>
    );
}

export default Display;
