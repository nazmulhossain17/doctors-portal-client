import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'The treatment is safe, painless, and takes only a few minutes to complete. It is especially beneficial for children and adults who are at high risk of developing tooth decay. ',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Cavity filling is an effective way to treat tooth decay and prevent more serious dental problems',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Teeth whitening is a cosmetic dental procedure that involves removing stains and discoloration from the teeth to improve their appearance.',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;