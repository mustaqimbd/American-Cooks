import Banner from '../Components/Header/Banner';
import Chefs from '../Components/Chefs/Chefs';
import OurRecipe from '../Components/Recipe/OurRecipe';
import Achivement from '../Components/Achivement/Achivement';


const Home = () => {

    return (
        <div className='mx-4 lg:mx-0'>
            <Banner />
            <Chefs />
            <OurRecipe />
            <Achivement />
        </div>
    );
};

export default Home;