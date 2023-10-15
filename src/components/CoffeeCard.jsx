import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { SlEye, SlPencil, SlTrash } from "react-icons/sl";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-livid.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                    })
            }
        })
    }


    return (
        <div className="card lg:card-side bg-[#F5F4F1] shadow-xl">
        <figure><img className='flex md:w-96 h-48 ' src={photo} alt="Movie" /></figure>
        <div className="flex justify-between w-full pr-4 py-20">
            <div className='flex flex-col font-ralway text-lg'>
            <h2 className="py-2"> name: {name}</h2>
            <p className="py-2"> Chif: {chef}</p>
            <p className=""> Price: 890tk</p>
            </div>
            <div className="card-actions justify-end">
                <div className="btn-group btn-group-vertical space-y-4">
                    <button className="btn bg-[#E3B577] text-white text-2xl"><span><SlEye></SlEye></span></button>
                    <Link to={`/updatecoffee/${_id}`}>
                    <button className="btn bg-[#3c393b] text-white text-2xl"><span><SlPencil></SlPencil></span></button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#ea4744] text-white text-2xl"><span><SlTrash></SlTrash></span></button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CoffeeCard;