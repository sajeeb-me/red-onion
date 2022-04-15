import React from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid'

const ChooseDetail = ({ detail }) => {
    const { img, title, description, icon } = detail;
    return (
        <div className='hover:shadow-lg pb-8 rounded-lg duration-300 ease-in'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='flex items-start mt-5 gap-3 px-2'>
                <img className='h-8 mt-1' src={icon} alt="" />
                <div className='text-left'>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                    <p className='opacity-60'><small>{description}</small></p>
                    <div className='flex items-end gap-2 hover:text-rose-500 hover:cursor-pointer'>
                        <p>See more</p>
                        <ArrowCircleRightIcon className="h-5 w-5 text-rose-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseDetail;