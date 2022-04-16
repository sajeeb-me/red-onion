import { ChevronRightIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FoodDetails = () => {

    const ref = useRef("")
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const navigate = useNavigate();
    let intPrice = 55;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decreseQuantity = () => {
        setQuantity(quantity - 1)
    }

    let currentPrice;
    if (quantity) {
        currentPrice = intPrice * quantity;
    }

    return (
        <div className='px-[120px] my-20'>
            <section className='grid grid-cols-2 text-left items-center'>
                <article className='pl-20'>
                    <h1 className='text-5xl font-semibold'>Light Breakfast</h1>
                    <p className='my-3 opacity-60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi officiis veritatis laborum odio! Libero fugiat debitis facere maiores repellendus? Quas!</p>
                    <div className='flex items-center gap-3'>
                        <h3 className='text-2xl font-semibold w-[70px]'>${currentPrice}</h3>
                        <div className='flex items-center px-4 border rounded-full'>
                            <button onClick={decreseQuantity} className='p-2 text-2xl'>-</button>
                            <p className='p-2 text-xl'>{quantity}</p>
                            <button onClick={increaseQuantity} className='p-2 text-rose-600 text-2xl'>+</button>
                        </div>
                    </div>
                    <button onClick={() => navigate('/cart')} className='flex items-center gap-2 bg-rose-500 text-white px-6 py-2 rounded-full my-4'>
                        <ShoppingCartIcon className='h-4' />
                        <p>Add</p>
                    </button>
                    <div className='flex items-center'>
                        <section className='mt-10 w-[350px] p-3 flex gap-12 overflow-hidden' ref={ref}>
                            <img className='w-[120px]' src="https://i.ibb.co/Vj6f6Wd/dinner3.png" alt="" />
                            <img className='w-[120px]' src="https://i.ibb.co/S3JrnBt/dinner2.png" alt="" />
                            <img className='w-[120px]' src="https://i.ibb.co/gJRwkJt/dinner4.png" alt="" />
                            <img className='w-[120px]' src="https://i.ibb.co/nRX0j7W/dinner5.png" alt="" />
                            <img className='w-[120px]' src="https://i.ibb.co/kHjcqnC/dinner6.png" alt="" />
                            <img className='w-[120px]' src="https://i.ibb.co/YpxRSc8/dinner1.png" alt="" />
                        </section>
                        <div>
                            <button onClick={() => scroll(100)}><ChevronRightIcon className='h-[40px] mt-10' /></button>
                        </div>
                    </div>
                </article>
                <article className='pl-10'>
                    <img className='w-[400px]' src="https://i.ibb.co/nRX0j7W/dinner5.png" alt="" />
                </article>
            </section>
        </div>
    );
};

export default FoodDetails;