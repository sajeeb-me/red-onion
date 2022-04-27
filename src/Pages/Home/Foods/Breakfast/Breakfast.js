// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Breakfast = () => {
    /* const breakfastItems = [
        {
            "id": 1,
            "name": "Beef Steak",
            "slogan": "Food you will love to share",
            "price": 18.99,
            "img": "https://i.ibb.co/kBV6Lb0/breakfast3.png"
        },
        {
            "id": 2,
            "name": "Honey Soy Glazed",
            "slogan": "Food you will love to share",
            "price": 13.99,
            "img": "https://i.ibb.co/hHddqbR/breakfast4.png"
        },
        {
            "id": 3,
            "name": "Tarragon Rubbed Salmon",
            "slogan": "Food you will love to share",
            "price": 15.99,
            "img": "https://i.ibb.co/k4C74bC/breakfast5.png"
        },
        {
            "id": 4,
            "name": "Indian Lunch",
            "slogan": "Food you will love to share",
            "price": 9.99,
            "img": "https://i.ibb.co/Wk4jqtr/breakfast6.png"
        },
        {
            "id": 5,
            "name": "Fried Chicken Bento",
            "slogan": "Food you will love to share",
            "price": 15.99,
            "img": "https://i.ibb.co/8m5Jw5g/breakfast1.png"
        },
        {
            "id": 6,
            "name": "Healthy Meal Plan",
            "slogan": "Food you will love to share",
            "price": 23.99,
            "img": "https://i.ibb.co/F7MWFZC/breakfast2.png"
        }
    ] */
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://desolate-savannah-70981.herokuapp.com/foods/breakfast')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='grid grid-cols-3 px-[120px] my-10'>
            {
                items.map(item => <Items key={item._id} item={item} />)
            }
        </div>
    );
};

export default Breakfast;