import React from 'react';

const AppointmentOption = ({option, setTreatment}) => {
    const {name, price, slots} = option;
    return (
        <div className="card shadow-xl">
  <div className="card-body text-center my-10">
    <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
    <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
    <p><small>Price: ${price}</small></p>
    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <div className="card-actions justify-end">
      <label
        htmlFor="booking-modal"
        className="btn btn-primary"
        onClick={() => setTreatment(option)}
        >
        Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;