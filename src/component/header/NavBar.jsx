import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar flex justify-between w-11/12 mx-auto rounded-lg border-4 border-[#F6F6F6] bg-[#9538E2]">
            {/* lg hidden */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#FFFFFF] "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    {/* Mobile Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content gap-y-5 bg-base-100 rounded-lg z-[1] mt-3 w-52 p-5 shadow">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='statistics'>Statistics</NavLink>
                        <NavLink to='dashboard'>Dashboard</NavLink>
                    </ul>
                </div>
                <div>
                    <a className="btn btn-ghost text-xl text-[#FFFFFF] ">Gedget-Heaven</a>
                </div>
            </div>

            {/*Mobile hiddem*/}
            <div>
                {/*lg Menu */}
                <div className="navbar-center hidden lg:flex gap-8 text-[#FFFFFF] ">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='statistics'>Statistics</NavLink>
                    <NavLink to='dashboard'>Dashboard</NavLink>
                </div>
            </div>

            {/* cart & Wish */}
            <div>
                {/* Cart List */}
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/128/6737/6737614.png" alt="" />
                            <span class="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>

                    {/* cliked item */}
                    <div
                        tabindex="0"
                        class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                        <div class="card-body">
                            <span class="text-lg font-bold">8 Items</span>
                            <span class="text-info">Subtotal: $999</span>
                            <div class="card-actions">
                                <button class="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Wish List */}
                <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/128/7245/7245139.png" alt="" />
                        <span class="badge badge-sm indicator-item">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;