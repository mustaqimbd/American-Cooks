import { useLoaderData } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Rating from 'react-rating';
const ChefRicepeDetails = () => {
    const [disaable, setDisable] = useState([]);
    const singleChefData = useLoaderData();
    const { name, bio, numberOfRecipes, pictureUrl, recipes, yearsOfExperience, likes } = singleChefData;

    const notify = () => toast("Added to your favorite!");
    const handleButtonClick = (id) => {
        notify();
        setDisable([...disaable, id])
    }
    return (
        <div>
            <ToastContainer />
            <div>
                <img className="w-full h-[413px]" src={pictureUrl} alt="" />
                <div className="space-y-3">
                    <div className='flex justify-between'>
                        <h3 className="text-2xl font-bold mt-3">Name :  {name}</h3> <span className='flex items-center gap-2'><AiFillLike className='text-blue-600' />Like {likes}</span>
                    </div>
                    <p><strong>Bio : </strong>{bio}</p>
                    <ul className='list-disc ml-6'>
                        <li>Experience : {yearsOfExperience} years</li>
                        <li>Numbers of recipes : {numberOfRecipes}</li>

                    </ul>
                </div>
            </div>
            <h1 className='text-center text-3xl font-bold my-4'>Best Recipes</h1>
            <div className='grid grid-cols-2 gap-6 mb-8'>
                {
                    recipes.map((recipe, index) => {
                        const { name, image, ingredients, cookingMethod, rating } = recipe;

                        return (
                            <div className='border' key={index}>
                                <img className='w-full h-[400px]' src={image} alt="" />
                                <div className='mx-4'>
                                    <div className='flex justify-between items-center my-2 '>
                                        <h1 className='text-lg font-bold flex-grow-1'>Name : {name}</h1>
                                        <p className='flex gap-4 items-center'>
                                            <span className='flex items-center gap-1'><Rating
                                                readonly
                                                initialRating={rating}
                                                emptySymbol={<span className="text-gray-400 text-2xl">&#9734;</span>}
                                                placeholderSymbol={<span className="text-red-500 text-2xl">&#9733;</span>}
                                                fullSymbol={<span className="text-yellow-500 text-2xl">&#9733;</span>}
                                            />{rating}
                                            </span>
                                            <button onClick={() => handleButtonClick(index)}
                                                disabled={disaable.includes(index) ? true : false}
                                                className='bg-yellow-300 px-3 py-2 text-lg font-bold rounded-md'>Favorite</button></p>
                                    </div>
                                    <p className='text-xl font-bold'>Ingredients : </p>
                                    <ul className='list-decimal ml-8 mb-4'>
                                        {
                                            ingredients.map((ingre, index) => <li key={index}>{ingre}</li>)
                                        }
                                    </ul>
                                    <p><strong>Cooking method : </strong>{cookingMethod}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
};

export default ChefRicepeDetails;