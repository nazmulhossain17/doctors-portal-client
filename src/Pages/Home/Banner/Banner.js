import React from 'react';
import chair from '../../../assets/images/chair.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src='https://st.depositphotos.com/1907633/3137/i/450/depositphotos_31373959-stock-photo-medicine-doctor-working-with-modern.jpg' className="rounded-lg w-1/2 shadow-2xl" alt=''/>
    <div>
      <h1 className="text-5xl font-bold">We Care for you</h1>
      <p className="py-6">Our medical service offers a comprehensive range of healthcare services to meet your needs.<br/> Our experienced and highly qualified medical professionals provide personalized and <br/> compassionate care to help you achieve optimal health and wellness. Whether you need <br/> a routine check-up or more specialized care, we offer a variety of services including diagnostic testing, preventative care, and treatment for acute and chronic conditions.</p>
      <button className="btn btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-indigo-400"><Link to='/appointment'>Get Started</Link></button>
    </div>
  </div>
</div>
    );
};

export default Banner;