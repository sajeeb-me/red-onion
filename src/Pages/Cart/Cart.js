import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Bikeimg from '../../images/Group 1151.png'

const Cart = () => {
    const [user] = useAuthState(auth)
    const [items, setItems] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const getItems = async () => {
            try {
                const { data } = await axios.get(`https://desolate-savannah-70981.herokuapp.com/cart?email=${user?.email}`, {
                    headers: {
                        authentication: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setItems(data)
            }
            catch (error) {
                console.log(error)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getItems()
    }, [])
    return (
        <div className='h-[60vh] flex justify-center'>
            <div>
                {/* <img src={Bikeimg} alt="" /> */}
                <h1 className='text-5xl font-bold'>Items {items?.length}</h1>
            </div>
        </div>
    );
};

export default Cart;