import React from 'react';
import FooterLogo from '../../../images/logo.png'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='bg-slate-900 px-[120px] py-10 text-white'>
            <section className='flex justify-between text-left'>
                <div>
                    <img className='h-10' src={FooterLogo} alt="" />
                </div>
                <div className='flex gap-10 text-sm font-light opacity-60'>
                    <div>
                        <p>About Online food</p>
                        <p>Read our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div>
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
            </section>
            <p className='mt-10 opacity-60'><small>Copyright &copy; {year} </small></p>
        </div>
    );
};

export default Footer;