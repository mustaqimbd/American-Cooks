import { Link, useLoaderData } from "react-router-dom";
import LazyLoad from 'react-lazy-load';
import { AiFillLike } from 'react-icons/ai';
const Chefs = () => {
    const { chefs } = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10'>Our Best American Chefs</h1>
            <p className="text-center my-3">Cook any best food recipe with experts chef of American.Cook any best food recipe with experts chef of American</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    chefs.map(chef => <ChefCard chef={chef} key={chef.id}></ChefCard>)
                }
            </div>
        </div>
    );
};
const ChefCard = ({ chef }) => {
    const { id, name, numberOfRecipes, pictureUrl, recipes, yearsOfExperience, likes } = chef;
    return (
        <div>
            <LazyLoad>
                <img className="w-full h-[200px]" src={pictureUrl} alt="" />
            </LazyLoad>
            <div className="space-y-1 lg:space-y-3">
                <h3 className="text-center text-xl font-bold my-3">{name}</h3>
                <p>Experience : {yearsOfExperience} years</p>
                <p>Numbers of recipes : {numberOfRecipes}</p>
                <div className="flex justify-between items-center"><span className='flex items-center gap-2'><AiFillLike className='text-blue-600' />Like {likes}</span> <Link to={`/chef-recipes/${id}`} className="bg-yellow-300 px-3 py-2 text-lg font-bold rounded-md">View Recipes</Link></div>
            </div>
        </div>
    )
}
export default Chefs;