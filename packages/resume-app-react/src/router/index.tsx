import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CommonLayout from '@/layout/CommonLayout';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Resume from '@/pages/Resume';

const Router = () => {
    return (
        <Routes>
            <Route element={<CommonLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Route>
        </Routes>
    );
};

export default Router;
