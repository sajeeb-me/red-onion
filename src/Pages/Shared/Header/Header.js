import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo2.png'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import CustomLink from './CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <nav className='flex justify-between items-center px-20 py-3 sticky top-0 bg-white z-10'>
            <div>
                <Link to='/home'><img className='h-10' src={Logo} alt="" /></Link>
            </div>
            <div className='flex items-center gap-4'>
                <CustomLink to='/cart'><ShoppingCartIcon className="h-5 w-5" /></CustomLink>
                {user ?
                    <button onClick={handleSignOut} className='bg-rose-600 py-1 px-4 rounded-full text-white'>Sign out</button>
                    :
                    <div className='flex items-center gap-4'>
                        <CustomLink className="py-1" to='/login'>Login</CustomLink>
                        <Link to='/signup' className='bg-rose-600 py-1 px-4 rounded-full text-white'>Sign up</Link>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Header;