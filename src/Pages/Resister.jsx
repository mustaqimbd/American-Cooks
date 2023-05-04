import { useContext, useState } from 'react';
import { UserContext } from '../Provider/AuthProvider';
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


function Resister() {

    const { createUser } = useContext(UserContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('')
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();

    const handleResister = (e) => {
        e.preventDefault();
        setError('')
        setSuccess('')
        if (password.length < 6) {
            setError('Password must be at least 6 characters!')
            return;
        }
        
        createUser(email, password)

            .then(r => {
                updateProfile(r.user, {
                    displayName: name,
                    photoURL: photo
                });

            })
            .then(() => {
                setSuccess('Registration has been successful!');
                navigate('/', { replace: true })
            })
            .catch(e => {
                setError(e.message);
            })
    }

    return (
        <><p className="text-red-800 text-center mt-3">{error || ''}</p>
            <p className="text-blue-800 text-center mt-3">{success || ''}</p>
            <form onSubmit={handleResister} className="max-w-md mx-auto mt-5 bg-green-50 mb-3 p-6">
                <h1 className='text-2xl font-bold text-center'>Please Registration</h1>
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
                        required
                    />
                </div>
                <div>
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
                <p className='text-center my-2'>Already have an account! Please <Link className='text-blue-700 font-bold' to='/login'>Login</Link></p>
                <div className="flex items-center justify-evenly">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Resister
                    </button>
                </div>
            </form>
        </>
    );
}

export default Resister;