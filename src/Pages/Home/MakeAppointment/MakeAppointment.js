import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
        style={{
            background: `url(${appointment})`
        }}>
            <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row">
    <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
    <div>
         <h4 className='text-lg text-primary font-bold'>Appointment</h4>
         <h1 className=" text-orange-400 text-4xl font-bold">Make an appointment Today</h1>
         <p className="text-black py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
         <button className='btn btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'><Link to='/appointment'>Appointment</Link></button>
     </div>
  </div>
</div>
        </section>
    );
};

export default MakeAppointment;