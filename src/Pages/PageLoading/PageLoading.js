import React from 'react';
import LoadingImg from '../../images/loading.gif'

const PageLoading = () => {
    return (
        <div className='h-[60vh] flex justify-center items-center'>
            <img src={LoadingImg} alt="" />
        </div>
    );
};

export default PageLoading;