import React from 'react';

const Social = () => {
    const images = [
        "https://i.ibb.co/KKh7Lmb/Rectangle-9.png",
        "https://i.ibb.co/gFfNFKR/Rectangle-10.png",
        "https://i.ibb.co/cgV1mh9/Rectangle-11.png",
        "https://i.ibb.co/M2xGPfr/Rectangle-12.png",
        "https://i.ibb.co/nsq3vp2/Rectangle-13.png",
        "https://i.ibb.co/277RSms/Rectangle-14.png",
        "https://i.ibb.co/Ttzh7yb/Rectangle-15.png",
        "https://i.ibb.co/NsfG1VB/Rectangle-16.png",
    ];



    return (
        <div className='text-center py-14'>
            <h4 className='text-lg font-ralway text'>Follow Us Now</h4>
            <h1 className='text-[#331A15] font-rancho text-5xl mt-3'>Follow on Instagram</h1>

            <div>
                <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((imageUrl, index) => (
                        <div key={index} className="">
                            <img src={imageUrl} alt={`Image ${index}`} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Social;










