import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loaderUser = useLoaderData()
    const [users, setUsers] = useState(loaderUser)

    const handleDelete = id => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                Swal.fire({
                    icon:'success',
                    title: 'Success',
                    text: 'User Deleted Successfully',
                    confirmButtonText: 'okay'
                })
            }
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining)
        })
    }

    return (
        <div>
            <h2>users: {loaderUser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th></th>
                                <td>{user.email}</td>
                                <td>{user.createtAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <button onClick={() => handleDelete(user._id)} className='btn'>X</button>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;