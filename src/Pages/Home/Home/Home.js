import React from 'react';
import Foods from '../Foods/Foods';
import './Home.css'

const Home = () => {
    return (
        <div>
            <section className='header-body my-3 flex justify-center items-center'>
                <div className='relative'>
                    <h1 className='text-5xl font-semibold'>Best food waiting for your belly</h1>
                    <input className='bg-white w-[450px] py-2 px-5 rounded-full my-5 outline-none' type="text" name="search" id="search" placeholder='Search Food Items' />
                    <button className='bg-rose-600 py-2 px-6 text-white rounded-full absolute bottom-5 right-28'>Search</button>
                </div>
            </section>
            <section className='foods-container my-10'>
                <Foods />
            </section>
        </div>
    );
};

export default Home;