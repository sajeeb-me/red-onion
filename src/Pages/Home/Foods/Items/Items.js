import React from 'react';

const Items = ({ item }) => {
    const { name, slogan, price, img } = item
    return (
        <div className='w-[300px] mx-auto py-5 rounded-lg hover:shadow-xl duration-300 ease-in'>
            <section>
                <div className='flex justify-center'>
                    <img className='w-[150px]' src={img} alt="" />
                </div>
                <div className='mt-3'>
                    <h1 className='text-lg font-semibold'>{name}</h1>
                    <p className='opacity-60'><small>{slogan}</small></p>
                    <h2 className='text-xl font-semibold'>${price}</h2>
                </div>
            </section>
        </div>
    );
};

export default Items;