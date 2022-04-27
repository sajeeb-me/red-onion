import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateLunch = () => {
    const { id } = useParams()
    const [lunchItem, setLunchItem] = useState({})
    useState(() => {
        fetch(`https://desolate-savannah-70981.herokuapp.com/foods/lunch/${id}`)
            .then(res => res.json())
            .then(data => setLunchItem(data))
    }, [])
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const slogan = event.target.slogan.value;
        const price = event.target.price.value;
        const img = event.target.img.value;
        const item = { name, slogan, price, img };
        // console.log(item)
        fetch(`https://desolate-savannah-70981.herokuapp.com/foods/lunch/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Menu updated successfully.")
            })
    }
    return (
        <div className='mb-20 mt-10'>
            <h1 className='text-3xl font-semibold mb-10'>Update : <span className='text-rose-600'>{lunchItem.name}</span></h1>
            <form className='w-1/2 mx-auto' onSubmit={handleSubmit}>
                <input className='border w-full p-2 mb-3 rounded-lg block' type="text" name='name' placeholder='Updated Name' required />
                <input className='border w-full p-2 mb-3 rounded-lg block' type="text" name='slogan' placeholder='Updated Slogan' required />
                <input className='border w-full p-2 mb-3 rounded-lg block' type="number" name='price' placeholder='Updated Price' required />
                <input className='border w-full p-2 mb-3 rounded-lg block' type="text" name='img' placeholder='Updated img url (ex: https://i.ibb.co/TPfVmxR/lunch5.png)' required />
                <input className='border w-full p-3 rounded-lg block bg-rose-600 text-white cursor-pointer' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default UpdateLunch;