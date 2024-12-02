import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-800'>
            <footer className="footer container mx-auto text-white mt-16  text-base-content p-10">
                <aside>
                    <img
                        className="w-14"
                        src="https://i.ibb.co/T2ZmBr6/lv-removebg-preview.png"
                        alt="Logo"
                    />
                    <h2 className='text-2xl font-semibold'>Next Travel</h2>
                    <p>
                        Providing reliable service since 2024
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;