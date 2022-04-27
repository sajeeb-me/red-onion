import React, { useEffect, useState } from 'react';
import Logo from '../../images/logo2.png'
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import PageLoading from '../PageLoading/PageLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home'

    const handleGetEmail = emailInput => {
        setEmail(emailInput)
    }
    const handleGetPassword = passwordInput => {
        setPassword(passwordInput)
    }

    const [user] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        signInUser,
        loading,
        userError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [token] = useToken(signInUser);

    useEffect(() => {

    }, [userError])

    if (token) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <PageLoading></PageLoading>
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userError) {
            switch (userError?.code) {
                case "auth/invalid-email":
                    toast.error("Invalid Email!");
                    return;
                case "auth/wrong-password":
                    toast.error("Wrong Password!");
                    return;
                default:
                    toast.error("Something went wrong!")
            }
        } else {
            await signInWithEmailAndPassword(email, password)

            // navigate(from, { replace: true })
        }

    }
    const hangleForgetPass = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.info('Sent email');
        } else {
            alert('input your email')
        }
    }
    return (
        < div >
            <section className='my-10'>
                <div>
                    <img className='h-[60px] mx-auto' src={Logo} alt="" />
                </div>
                <div className='mt-10'>
                    <form onSubmit={handleSubmit} className='form-container'>
                        <input onBlur={(event) => handleGetEmail(event.target.value)} type="email" name="email" id="email" placeholder='Email' required />
                        <input onBlur={(event) => handleGetPassword(event.target.value)} type="password" name="password" id="password" placeholder='Password' required />
                        <button onClick={hangleForgetPass} className='text-rose-300 pl-5 font-semibold hover:text-rose-500'><small>Forget password?</small></button>
                        <input className='bg-rose-600 w-[400px] text-white cursor-pointer' type="submit" value="Sign up" />
                    </form>
                    <p onClick={() => navigate('/signup')} className='text-rose-600 pl-5 font-semibold cursor-pointer hover:underline'>Don't have account?</p>
                </div>
                <SocialMediaLogin />
                <ToastContainer />
            </section>
        </div >
    );
};

export default Login;