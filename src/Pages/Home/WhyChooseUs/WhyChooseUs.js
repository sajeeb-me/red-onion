import React from 'react';
import ChooseUsDetails from './ChooseUsDetails/ChooseUsDetails';

const WhyChooseUs = () => {
    return (
        <div className='my-10 px-[150px]'>
            <section>
                <h1 className='text-2xl font-semibold text-left mb-2'>Why you Choose Us ?</h1>
                <p className='w-[320px] text-left opacity-60'><small>We provided always good and fresh food . We always believe in Quality rather then Quantity.</small></p>
            </section>
            <section>
                <ChooseUsDetails />
            </section>
        </div>
    );
};

export default WhyChooseUs;