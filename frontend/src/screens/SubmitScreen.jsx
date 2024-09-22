import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SubmitScreen = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newUser = { name, email, age }

        try {
            await axios.post('/api/users/addUser', newUser);
            navigate('/Users')
        } catch(error) {
            console.log('Error submitting user: ', error);
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='w-full max-w-md bg-white p-8 shadow-lg rounded'>
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Submit new user</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-gray-600 mb-1">Name</label>
        <input 
        type='text' 
        placeholder='Enter Name'
        value={name}
        onChange={(e) => setName(e.target.value)} required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-cyan-500"/>

        <label className="block text-gray-600 mb-1">Email</label>
        <input 
        type='email' 
        value={email}
        placeholder='Enter email' 
        onChange={(e) => setEmail(e.target.value)} required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-cyan-500"/>

        <label className="block text-gray-600 mb-1">Age</label>
        <input 
        type='number' 
        value={age}
        placeholder='Enter Age'
        onChange={(e) => setAge(e.target.value)} required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-cyan-500"/>

        <button
        type='submit'
        className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600 transition duration-300"
        >
          Submit
          </button>
      </form>
      </div>

    </div>
  )
}

export default SubmitScreen
