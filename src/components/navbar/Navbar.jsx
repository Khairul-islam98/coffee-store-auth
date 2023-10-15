import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center gap-6 py-5'>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/signin"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                }
            >
                Sign In
            </NavLink>
            <NavLink
                to="/signup"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                }
            >
                Sign Up
            </NavLink>
            <NavLink
                to="/users"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                }
            >
                Users
            </NavLink>

        </div>
    );
};

export default Navbar;