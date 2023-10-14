import React from 'react';
import headerImg from '../../assets/images/header.png';
import logoImg from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div>
            <div className="hero min-h-[70px]" style={{ backgroundImage: `url(${headerImg})` }}>
                <div className='flex gap-2'>
                    <img className='h-20 ml-20' src={logoImg} alt="" />
                    <p className='flex justify-center items-center font-rancho text-4xl text-white'>Espresso Emporium</p>
                </div>
            </div>
        </div>
    );
};

export default Header;