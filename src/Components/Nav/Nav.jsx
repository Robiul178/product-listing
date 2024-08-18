// import React from 'react';

const Nav = () => {
    return (
        <div>
            <div className="navbar px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="">Home</a></li>
                            <li><a href="">Login</a></li>
                            <li><a href="">Singin</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <h2>DailyMarket</h2>
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="flex gap-3 font-semibold">
                        <li><a href="">Home</a></li>
                        <li><a href="">Login</a></li>
                        <li><a href="">Singin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;