import LazyLoad from 'react-lazy-load';
const OurRecipe = () => {
    return (
        <div>
            <h1 className="text-center text-xl lg:text-3xl font-bold mt-5 lg:mt-10 mb-4 lg:mb-6">Our Best Easy Healthy Dinner Recipes gallery</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:w-[80%] mx-auto">
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://images.immediate.co.uk/production/volatile/sites/30/2012/09/Beef-wellington-d4f3320.jpg?quality=90&webp=true&resize=300,272" alt="" />
                    </LazyLoad>
                    <p className="text-center mt-2">Beef wellington</p>


                </div>
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1-580x851.jpg" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">Scrambled Eggs</p>
                </div>
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://cafedelites.com/wp-content/uploads/2018/05/Jambalaya-IMAGE-54-1365x2048.jpg" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">roasted lemon chicken</p>
                </div>
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://images.immediate.co.uk/production/volatile/sites/30/2012/09/Beef-wellington-d4f3320.jpg?quality=90&webp=true&resize=300,272" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">Beef wellington</p>
                </div>
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://www.thespruceeats.com/thmb/2VjmwngG_vwtAWbGRcTLKeihEZk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/connecticut-style-lobster-roll-recipe-5496594-hero-05-26128df34866403997c3b15cb345f18d.jpg" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">Lobster Rolls</p>
                </div>
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://www.foodandwine.com/thmb/ZRQWVkrrpkwypbVdM6irFMycfkc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200804-r-herb-roasted-chicken-d02d649f6e60441b8baf0bb5ef28fcdf.jpg" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">roasted lemon chicken</p>
                </div>
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://www.foodandwine.com/thmb/ZRQWVkrrpkwypbVdM6irFMycfkc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200804-r-herb-roasted-chicken-d02d649f6e60441b8baf0bb5ef28fcdf.jpg" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">roasted lemon chicken</p>
                </div>
                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs-1-580x851.jpg" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">Scrambled Eggs</p>
                </div>

                <div>
                    <LazyLoad>
                        <img className="w-full h-[150px]" src="https://images.immediate.co.uk/production/volatile/sites/30/2012/09/Beef-wellington-d4f3320.jpg?quality=90&webp=true&resize=300,272" alt="" />
                    </LazyLoad>

                    <p className="text-center mt-2">Beef wellington</p>
                </div>
            </div>
        </div>
    );
};

export default OurRecipe;