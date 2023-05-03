import { useLoaderData } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import { AiFillLike } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const ChefRicepeDetails = () => {
    const [disaable, setDisable] = useState(false);
    const singleChefData = useLoaderData();
    const { id, name, bio, numberOfRecipes, pictureUrl, recipes, yearsOfExperience, likes } = singleChefData;
    console.log(singleChefData);

    const notify = () => toast("Added to your favorite!");
    const handleButtonClick = () => {
        notify();
        setDisable(true);
    }

    return (
        <div>
            <ToastContainer />
            <div>
                <img className="w-full h-[413px]" src={pictureUrl} alt="" />
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold mt-3">Name :  {name}</h3>
                    <p><strong>Bio : </strong>{bio}</p>
                    <ul className='list-disc ml-6'>
                        <li>Experience : {yearsOfExperience} years</li>
                        <li>Numbers of recipes : {numberOfRecipes}</li>
                        <li><AiFillLike />Likes : {likes}</li>
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
                                        <p className='flex gap-4 items-center'><span>Rating : {rating}</span>
                                            <button onClick={handleButtonClick} disabled={disaable} className='bg-yellow-300 px-3 py-2 text-lg font-bold rounded-md'>Add to favorite</button></p>
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
        </div>
    );
};

export default ChefRicepeDetails;