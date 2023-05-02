import { useContext, useState } from 'react';
import { UserContext } from '../Provider/AuthProvider';

import {updateProfile } from "firebase/auth";


function Resister() {

    const { createUser } = useContext(UserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const handleResister = (e) => {
        e.preventDefault()
        createUser(email, password)
            .then(r => {
                updateProfile(r.user, {
                    displayName: name,
                    photoURL: photo
                });
                console.log(r.user);
            })
            .then(() => {
                setSuccess('User created successfully!');
            })
            .catch(e => {
                setError(e.message);
            })
    }
    
    // console.log(name, email, password, photo);
    return (
        <><p className="text-red-800 text-center mt-3">{error || ''}</p>
            <p className="text-blue-800 text-center mt-3">{success || ''}</p>
            <form onSubmit={handleResister} className="max-w-md mx-auto mt-10 bg-purple-400 p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Photo Url
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="photo"
                        type="text"
                        name="photo"
                        value={photo}
                        onChange={(e) => { setPhoto(e.target.value) }}
                        placeholder="Enter your Photo Url"
                    />
                </div>
                <div className="flex items-center justify-evenly">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Resister
                    </button>
                </div>
            </form>
            <div className="flex flex-col m-8">
                <button className="bg-blue-600 text-lg font-bold px-4 py-2 mb-4 w-[230px] rounded-md mx-auto">Sign up with Google</button>
                <button className="bg-blue-600 text-lg font-bold px-4 py-2 w-[230px] rounded-md mx-auto">Sign up with Github</button>
            </div>
        </>
    );
}

export default Resister;