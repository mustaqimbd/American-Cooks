import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../Provider/AuthProvider';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const { user, loading, auth } = useContext(UserContext)
    // console.log(user, loading);
    const logOUt = () => {
        signOut(auth)
            .then(() => { })
            .catch(err => { console.log(err.message); })
    }
    return (
        <div className='flex p-5 bg-purple-200 items-center'>
            <h1 className='text-3xl font-bold'>Recipe World</h1>
            <ul className='flex gap-10 mx-auto text-lg font-bold'>
                <li> <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700"
                            : ""
                    }
                >
                    Home
                </NavLink>
                </li>
                <li> <NavLink
                    to='/blog'
                    className={({ isActive }) =>
                        isActive
                            ? "text-blue-700"
                            : ""
                    }
                >
                    Blog
                </NavLink>
                </li>

            </ul>
            <div>
                {loading && <div aria-label="Loading..." role="status" className="flex items-center space-x-2">
                    <svg className="h-10 w-10 mr-8 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                    </svg>

                </div>
                }
                {
                    user ? <div className=' flex gap-4'><img className='w-10 h-10 rounded-full' src={user.photoURL && user.photoURL} alt="img" title={user.displayName && user.displayName} /> <button className='py-2 px-3 text-lg font-bold bg-purple-700 rounded-md text-white' onClick={logOUt}>Log out</button></div>
                        : loading == false && <span><Link to='/login' className='py-2 px-3 text-lg font-bold bg-purple-700 rounded-md text-white'>Login</Link></span>
                }

            </div>
        </div>
    );
};

export default Navbar;