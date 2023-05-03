import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='text-center mt-4'>

            <h1 className='text-6xl font-bold'>Oops!</h1>
            <p className='my-5'>Sorry, an unexpected error has occurred.</p>
            <div className="flex">
                <img className="mx-auto" src="https://cdn.dribbble.com/users/594316/screenshots/16462848/media/4e5495fe678213b960203c39b10b7ffc.jpg?compress=1&resize=400x300" alt="" />
            </div>
            <p className='text-xl mb-5 mt-4 text-red-600 font-bold'>
                {error.status ? error.status : ''} {error.statusText ? error.statusText : ''}
            </p>
            <Link className='py-2 px-3 text-lg font-bold bg-purple-700 rounded-md text-white' to='/'>Back to Homepage</Link>

        </div>
    );
};

export default ErrorPage;