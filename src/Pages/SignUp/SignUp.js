import React, { useState } from 'react';
import Logo from '../../images/logo2.png'
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import './SignUp.css'

const SignUp = () => {
    const [name, setName] = useState("");

    const handleGetName = nameInput => {
        setName({ value: nameInput, error: "" })
    }

    console.log(name)

    return (
        < div >
            <section className='my-10'>
                <div>
                    <img className='h-[60px] mx-auto' src={Logo} alt="" />
                </div>
                <div className='mt-10'>
                    <form className='form-container'>
                        <input onBlur={(event) => handleGetName(event.target.value)} type="text" name="name" id="name" placeholder='Name' required />
                        <input type="email" name="email" id="email" placeholder='Email' required />
                        <input type="password" name="password" id="password" placeholder='Password' required />
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' required />
                        <input className='bg-rose-600 w-[400px] text-white cursor-pointer' type="submit" value="Sign up" />
                    </form>
                    <p className='text-rose-600 pl-5 font-semibold cursor-pointer hover:underline'>Already have account?</p>
                </div>
                <SocialMediaLogin />
            </section>
        </div >
    );
};

export default SignUp;