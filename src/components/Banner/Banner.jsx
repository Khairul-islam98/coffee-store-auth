import React from 'react';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  ml-20 text-neutral-content">
                    <div className="px-20 ml-[420px]">
                        <h3 className="mb-5 text-xl font-rancho">Would you like a Cup of Delicious Coffee?</h3>
                        <p className="mb-5 text-sm font-ralway">t's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn font-rancho bg-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;