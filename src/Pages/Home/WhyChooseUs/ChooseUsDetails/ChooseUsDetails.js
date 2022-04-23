import React from 'react';
import ChooseDetail from '../ChooseDetail/ChooseDetail';

const ChooseUsDetails = () => {
    const details = [
        {
            "id": 1,
            "img": "https://i.ibb.co/8dbbyKW/choose-us-1.png",
            "title": "Fast Delivery",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority.",
            "icon": "https://i.ibb.co/LvdqtZ0/Group-204.png"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/r3fhyy0/choose-us-2.png",
            "title": "A Good Auto Responder",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority.",
            "icon": "https://i.ibb.co/GMWmt1n/Group-1133.png"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/zJHGsqn/choose-us-3.png",
            "title": "Home Delivery",
            "description": "There are many variations of passages of Lorem Ipsum available, but the majority.",
            "icon": "https://i.ibb.co/mRrys4f/Group-245.png"
        }
    ]
    return (
        <div className='my-10 grid grid-cols-3 gap-5'>
            {
                details.map(detail => <ChooseDetail key={detail.id} detail={detail} />)
            }
        </div>
    );
};

export default ChooseUsDetails;