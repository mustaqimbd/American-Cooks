import { useContext, useState } from 'react';
import { UserContext } from '../Provider/AuthProvider';

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';


function Login() {

    const { signIn, auth } = useContext(UserContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault();
        setError('')
        setSuccess('')
        signIn(email, password)
            .then(r => {
                console.log(r.user);
            })
            .then(() => {
                setSuccess('Login has been successful!');
            })
            .catch(e => {
                setError(e.message);
            })
    }

    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                setSuccess('Login has been successful!');
            })
            .catch(err => {
                setError(err.message);
            })
    }



    // console.log(name, email, password, photo);
    return (
        <><p className="text-red-800 text-center mt-3">{error || ''}</p>
            <p className="text-blue-800 text-center mt-3">{success || ''}</p>
            <form onSubmit={handleSignIn} className="max-w-md mx-auto mt-10 bg-purple-400 p-6">
                <h1 className='text-2xl font-bold text-center'>Please Login</h1>
                
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
                <div>
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
               <p className='text-center my-2'>New to Here? Please <Link className='text-blue-700 font-bold' to='/resister'>Register</Link></p>
                <div className="flex items-center justify-evenly">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className="flex flex-col m-8">
                <button onClick={loginWithGoogle} className="bg-blue-600 text-lg font-bold px-4 py-2 mb-4 w-[230px] rounded-md mx-auto">Login with Google</button>
                <button className="bg-blue-600 text-lg font-bold px-4 py-2 w-[230px] rounded-md mx-auto">Login with Github</button>
            </div>
        </>
    );
}

export default Login;