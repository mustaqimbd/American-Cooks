
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Provider/AuthProvider';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const { user, loading, auth } = useContext(UserContext)
    console.log(user, loading);
    const logOUt = () => {
        signOut(auth)
            .then(() => { })
            .catch(err => { console.log(err.message); })
    }
    return (
        <div className='flex p-5 bg-purple-200 items-center'>
            <h1 className='text-3xl font-bold'>Recipe World</h1>
            <ul className='flex gap-10 mx-auto text-lg font-bold'>
                <li><Link to='/'>Home</Link></li>
                <li><Link>Blog</Link></li>
            </ul>
            <div>
                {
                    user ? <div><img className='w-10 h-10 rounded-full' src={user.photoURL && user.photoURL} alt="img" title={user.displayName && user.displayName} /> <button onClick={logOUt}>Log out</button></div>
                        : loading == false && <span><Link to='/login' className='py-2 px-3 text-lg font-bold bg-purple-700 rounded-md text-white'>Login</Link></span>
                }

            </div>
        </div>
    );
};

export default Navbar;