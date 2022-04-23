// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Items from '../Items/Items';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import useLunch from '../../../../Hooks/useLunch';

const Lunch = () => {
    /* const lunchItems = 
    [
        {
            "name": "Beef Steak",
            "slogan": "Food you will love to share",
            "price": 18.99,
            "img": "https://i.ibb.co/TtyyR7x/lunch3.png"
        },
        {
            "name": "Honey Soy Glazed",
            "slogan": "Food you will love to share",
            "price": 13.99,
            "img": "https://i.ibb.co/WxBnxbW/lunch4.png"
        },
        {
            "name": "Tarragon Rubbed Salmon",
            "slogan": "Food you will love to share",
            "price": 15.99,
            "img": "https://i.ibb.co/TPfVmxR/lunch5.png"
        },
        {
            "name": "Indian Lunch",
            "slogan": "Food you will love to share",
            "price": 9.99,
            "img": "https://i.ibb.co/jGhrs8Q/lunch6.png"
        },
        {
            "name": "Fried Chicken Bento",
            "slogan": "Food you will love to share",
            "price": 15.99,
            "img": "https://i.ibb.co/HYw8Bj9/lunch1.png"
        },
        {
            "name": "Healthy Meal Plan",
            "slogan": "Food you will love to share",
            "price": 23.99,
            "img": "https://i.ibb.co/bRcyV1Q/lunch2.png"
        }
    ] */
    const [items, setItems] = useLunch()
    return (
        <div className='px-[120px] my-10'>
            <div className='grid grid-cols-3'>
                {
                    items.map(item => <Items key={item._id} item={item} />)
                }
            </div>
            <div className='flex justify-between'>
                <Link to='/lunch/edit_lunch' className='flex items-center gap-2 font-semibold text-rose-600 opacity-50  hover:opacity-100 hover:underline duration-200 ease-in'>
                    <ArrowLeftIcon className="h-5 w-5" />
                    <p>Edit Lunch</p>
                </Link>
                <Link to='/lunch/add_lunch' className='flex items-center gap-2 font-semibold text-rose-600 opacity-50  hover:opacity-100 hover:underline duration-200 ease-in'>
                    <p>Add Lunch</p>
                    <ArrowRightIcon className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

export default Lunch;