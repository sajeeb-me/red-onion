import React from 'react';
import { Link } from 'react-router-dom';
import useLunch from '../../../../Hooks/useLunch';

const EditLunch = () => {
    const [items, setItems] = useLunch()
    const handleDelete = id => {
        console.log(id)
        fetch(`http://localhost:5000/foods/lunch/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const permission = window.confirm("Are you sure to delete this item?")
                if (permission) {
                    // console.log(data)
                    const remaining = items.filter(item => item._id !== id)
                    setItems(remaining)
                }
            })
    }
    return (
        <div className='px-[150px] mt-10 mb-20'>
            <h1 className='text-3xl font-semibold mb-5'>Edit Lunch Menu</h1>
            <section>
                {
                    items.map(item => <div key={item._id} className='border py-3 mb-3 px-5 rounded-xl flex justify-between'>
                        <p>{item.name}</p>
                        <div className='flex gap-5'>
                            <Link to={`/lunch/update_lunch/${item._id}`}><button className='hover:underline'>Update</button></Link>
                            <button onClick={() => handleDelete(item._id)} className='border rounded-lg px-2 hover:bg-slate-50'>X</button>
                        </div>
                    </div>)
                }
            </section>
        </div>
    );
};

export default EditLunch;