import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center gap-6 mt-10'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-bold'>Welcome to <span className='text-yellow-400'>Recipe World</span></h1>
                <p> Similique quas, delectus quisquam eum debitis consectetur possimus qui ducimus nulla natus!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>

                <div className='space-x-5'>
                    <button className='bg-purple-500 px-3 py-2 text-lg font-bold rounded-md'>Get recipe</button>
                    <button className='bg-purple-500 px-3 py-2 text-lg font-bold rounded-md'>Explore More</button>
                    </div>
            </div>
            <div>
                <img className='rounded-md' src="https://weelicious.com/wp-content/uploads/2018/02/Classic-American-Recipes-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;