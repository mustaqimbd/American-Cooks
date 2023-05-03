import React from 'react';

const Achivement = () => {
    return (
        <>
            <h1 className='text-center font-bold text-3xl mb-3 mt-12'>Our Achievement</h1>
            <div className='flex lg:flex-row flex-col gap-5 items-center mb-8'>
                <div className='lg:w-[40%]'>
                    <img className='w-full' src="https://cifmng.com/wp-content/uploads/2018/04/achievements-300x151.png" alt="" />
                </div>
                <div className='space-y-5'>
                    <div>
                        <h1 className='text-xl font-bold'>We Are Winners of 50 Competitions</h1>
                        <p>
                            Salami corned beef short loin sausage meatloaf fatback andouille kielbasa frankfurter sirloin alcatra beef ribs.</p>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>27 Professional Chefs-Trainers</h1>
                        <p>
                            Ham hock jerky tail kevin, buffalo shoulder doner venison leberkas pig beef burgdoggen flank ribeye picanha burgdoggen</p>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Guaranteed Fast Employment</h1>
                        <p>

                            Ball tip landjaeger pork chop, kielbasa shank filet mignon cow burgdoggen cupim buffalo porchetta. Ribeye beef ribs flank.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Achivement;