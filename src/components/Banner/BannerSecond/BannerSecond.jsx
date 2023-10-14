import React from 'react';
import Img1 from '../../../assets/images/icons/1.png';
import Img2 from '../../../assets/images/icons/2.png';
import Img3 from '../../../assets/images/icons/3.png';
import Img4 from '../../../assets/images/icons/4.png';

const BannerSecond = () => {
    return (
        <div>
            <div className="hero min-h-[200px] bg-[#ECEAE3]" >
                <div className='flex justify-center items-center gap-3 py-2'>
                    <div className=''>
                        <img src={Img1} alt="" />
                        <h4 className='text-[#331A15] text-2xl py-1 font-rancho'>Awesome Aroma</h4>
                        <p className='font-ralway text-[#1B1A1A] text-xs'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={Img2} alt="" />
                        <h4 className='text-[#331A15] text-2xl py-1 font-rancho'>Awesome Aroma</h4>
                        <p className='font-ralway text-[#1B1A1A] text-xs'>We served the coffee to you maintaining <br /> the best quality</p>
                    </div>
                    <div>
                        <img src={Img3} alt="" />
                        <h4 className='text-[#331A15] text-2xl py-1 font-rancho'>Awesome Aroma</h4>
                        <p className='font-ralway text-[#1B1A1A] text-xs'>The coffee is made of the green coffee <br /> beans which you will love</p>
                    </div>
                    <div>
                        <img src={Img4} alt="" />
                        <h4 className='text-[#331A15] text-2xl py-1 font-rancho'>Awesome Aroma</h4>
                        <p className='font-ralway text-[#1B1A1A] text-xs'>Your coffee is brewed by first roasting <br />the green coffee beans</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSecond;
