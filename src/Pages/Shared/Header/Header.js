import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo2.png'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import CustomLink from './CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-between items-center px-20 py-3'>
            <div>
                <Link to='/'><img className='h-10' src={Logo} alt="" /></Link>
            </div>
            <div className='flex items-center gap-4'>
                <CustomLink to='/cart'><ShoppingCartIcon className="h-5 w-5" /></CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
                <Link to='/signup' className='bg-rose-600 py-1 px-4 rounded-full text-white'>Sign up</Link>
            </div>
        </nav>
    );
};

export default Header;