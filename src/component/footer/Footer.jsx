import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-[80px]'>
            <footer className='text-center bg-base-200 p-10'>
                <h1 className='text-2xl md:text-3xl lg:text-4x font-bold '>Gadget Heaven</h1>
                <p className='text-gray-500'>Leading the way in cutting-edge technology and innovation.</p>
            </footer>
            <footer className="footer bg-base-200 text-base-content p-10 flex flex-wrap justify-around">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;