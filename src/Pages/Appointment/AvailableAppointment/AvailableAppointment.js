import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data: appointmentOption = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async() => {
        const res = await fetch(`https://doctors-portal-server-iota-teal.vercel.app/v2/appointmentOptions?date=${date}`)
        const data = await res.json();
        return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-16'>
            <p className='text-center text-primary font-bold'>Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOption.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal 
                treatment={treatment}
                selectedDate={selectedDate}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointment;