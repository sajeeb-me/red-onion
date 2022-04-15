// import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Lunch = () => {
    const lunchItems = [
        {
            "id": 1,
            "name": "Beef Steak",
            "slogan": "Food you will love to share",
            "price": 18.99,
            "img": "https://i.ibb.co/TtyyR7x/lunch3.png"
        },
        {
            "id": 2,
            "name": "Honey Soy Glazed",
            "slogan": "Food you will love to share",
            "price": 13.99,
            "img": "https://i.ibb.co/WxBnxbW/lunch4.png"
        },
        {
            "id": 3,
            "name": "Tarragon Rubbed Salmon",
            "slogan": "Food you will love to share",
            "price": 15.99,
            "img": "https://i.ibb.co/TPfVmxR/lunch5.png"
        },
        {
            "id": 4,
            "name": "Indian Lunch",
            "slogan": "Food you will love to share",
            "price": 9.99,
            "img": "https://i.ibb.co/jGhrs8Q/lunch6.png"
        },
        {
            "id": 5,
            "name": "Fried Chicken Bento",
            "slogan": "Food you will love to share",
            "price": 15.99,
            "img": "https://i.ibb.co/HYw8Bj9/lunch1.png"
        },
        {
            "id": 6,
            "name": "Healthy Meal Plan",
            "slogan": "Food you will love to share",
            "price": 23.99,
            "img": "https://i.ibb.co/bRcyV1Q/lunch2.png"
        }
    ]
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch('lunchitems.json')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [items])
    return (
        <div className='grid grid-cols-3 px-[120px] my-10'>
            {
                lunchItems.map(item => <Items key={item.id} item={item} />)
            }
        </div>
    );
};

export default Lunch;