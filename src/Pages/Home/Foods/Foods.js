import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../Shared/Header/CustomLink/CustomLink';

const Foods = () => {
    return (
        <div>
            <section className='flex justify-center gap-10'>
                <CustomLink to='/home/breakfast'>Breakfast</CustomLink>
                <CustomLink to='/home/lunch'>Lunch</CustomLink>
                <CustomLink to='/home/dinner'>Dinner</CustomLink>
            </section>
            <Outlet />
        </div>
    );
};

export default Foods;