import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import CustomLink from '../../Shared/Header/CustomLink/CustomLink';

const Foods = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section className='flex justify-center gap-10'>
                <CustomLink className='py-1' to='/home/breakfast'>Breakfast</CustomLink>
                <CustomLink className='py-1' to='/home/lunch'>Lunch</CustomLink>
                <CustomLink className='py-1' to='/home/dinner'>Dinner</CustomLink>
            </section>
            <Outlet />
            <section>
                <button onClick={() => (navigate('/cart'))} className='bg-rose-600 text-white py-2 px-7 rounded-full my-5'>Checkout Your Food</button>
            </section>
        </div>
    );
};

export default Foods;