import React from 'react';
import Contact from '../Contact/Contact';
import logo from '../../assets/images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLocationDot} from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url(https://i.ibb.co/R39szSw/Rectangle-18.png)`}}>
            <div className='ml-5  md:flex justify-between items-center gap-20'>
                <div>
                    <img src={logo} alt="" />
                    <h1 className='text-4xl text-[#331A15] font-rancho mt-5 mb-5'>Espresso Emporium</h1>
                    <p className='text-[#1B1A1A] text-base font-ralway'>Always ready to be your friend. Come & Contact with us to share your <br /> memorable moments, to share with your best companion.</p>
                    <div className='flex text-3xl text-[#331A15] mt-5 mb-5 gap-3'>
                        <span><FaFacebook></FaFacebook></span>
                        <span><FaTwitter></FaTwitter></span>
                        <span><FaInstagram></FaInstagram></span>
                        <span><FaLinkedin></FaLinkedin></span>
                    </div>
                    <h1 className='text-4xl text-[#331A15] font-rancho'>Get in Touch</h1>
                    <div className='mt-5 text-lg text-[#331A15] flex flex-col gap-6'>
                        <p className='flex gap-3 items-center'><span><FiPhone></FiPhone></span>  +8801863125143</p>
                        <p className='flex gap-3 items-center'><span><FiMail></FiMail></span>  Janeyrahman900@gmail.com</p>
                        <p className='flex gap-3 items-center'><span><FaLocationDot></FaLocationDot></span>  musapur, companigonj, noakhali</p>
                    </div>
                </div>
                <div className='mt-10'>
                <h1 className='text-4xl   text-[#331A15] font-rancho'>Connect with Us</h1>
                <Contact></Contact>
                </div>
            </div>
        </div>
    );
};

export default Footer;

