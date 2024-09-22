import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const UsersScreen = () => {
    const [users, setUsers]  = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
            const { data } = await axios.get('/api/users/')
            setUsers(data);
        } catch(error) {
            console.log(error)
        }
      }

      fetchUsers();

    }, [])

    return(
        <div className="flex flex-col items-center justify-center bg-gray-50">
        <h1 className='my-10 text-4xl text-center text-cyan-500'>Users</h1>
        <Link to='/addUser'>
        <button 
        className="mb-5 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600" 
        >Add user
        </button>
        </Link>
        <table className="border border-gray-300 text-left ">
            <thead>
                <th className="px-8 py-2 border border-gray-300">Name</th>
                <th className="px-8 py-2 border border-gray-300">Email</th>
                <th className="px-8 py-2 border border-gray-300">Age</th>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                        <td className="px-4 py-2 border border-gray-300">{user.email}</td>
                        <td className="px-4 py-2 border border-gray-300">{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default UsersScreen;