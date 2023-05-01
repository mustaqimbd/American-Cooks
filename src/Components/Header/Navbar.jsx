
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex p-5 bg-purple-200 items-center'>
            <h1 className='text-3xl font-bold'>Recipe World</h1>
            <ul className='flex gap-10 mx-auto text-lg font-bold'>
                <li><Link>Home</Link></li>
                <li><Link>Blogs</Link></li>
            </ul>
            <div>User Profile</div>
        </div>
    );
};

export default Navbar;