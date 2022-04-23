// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Dinner = () => {
    /*  const dinnerItems = [
         {
             "id": 1,
             "name": "Beef Steak",
             "slogan": "Food you will love to share",
             "price": 18.99,
             "img": "https://i.ibb.co/S3JrnBt/dinner2.png"
         },
         {
             "id": 2,
             "name": "Honey Soy Glazed",
             "slogan": "Food you will love to share",
             "price": 13.99,
             "img": "https://i.ibb.co/Vj6f6Wd/dinner3.png"
         },
         {
             "id": 3,
             "name": "Tarragon Rubbed Salmon",
             "slogan": "Food you will love to share",
             "price": 15.99,
             "img": "https://i.ibb.co/gJRwkJt/dinner4.png"
         },
         {
             "id": 4,
             "name": "Indian Lunch",
             "slogan": "Food you will love to share",
             "price": 9.99,
             "img": "https://i.ibb.co/nRX0j7W/dinner5.png"
         },
         {
             "id": 5,
             "name": "Fried Chicken Bento",
             "slogan": "Food you will love to share",
             "price": 15.99,
             "img": "https://i.ibb.co/kHjcqnC/dinner6.png"
         },
         {
             "id": 6,
             "name": "Healthy Meal Plan",
             "slogan": "Food you will love to share",
             "price": 23.99,
             "img": "https://i.ibb.co/YpxRSc8/dinner1.png"
         }
     ] */
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/foods/dinner')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return (
        <div className='grid grid-cols-3 px-[120px] my-10'>
            {
                items.map(item => <Items key={item._id} item={item} />)
            }
        </div>
    );
};

export default Dinner;