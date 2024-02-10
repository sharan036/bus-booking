import React, { useState } from 'react';
import bgImage from './assets/back.jpg';
import Connect from './components/Wallet/Connect';
 

const Taxi = () => {
  const [activeTab, setActiveTab] = useState('bookCab');

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto p-8 rounded-lg bg-white shadow-xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Book a Bus Ride</h1>
        <div className="flex justify-center space-x-8">
          <button
            className={`text-lg px-6 py-3 rounded-full focus:outline-none ${activeTab === 'bookCab' ? 'bg-blue-500 text-white' : 'text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => setActiveTab('bookCab')}
          >
            Book a Bus
          </button>
          <button
            className={`text-lg px-6 py-3 rounded-full focus:outline-none ${activeTab === 'yourTrips' ? 'bg-blue-500 text-white' : 'text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => setActiveTab('yourTrips')}
          >
            Your Trips
          </button>
        </div>
        <div className="mt-8">
          {activeTab === 'bookCab' && <BookCabForm />}
          {activeTab === 'yourTrips' && <YourTrips />}
        </div>
      </div>
    </div>
  );
};

const BookCabForm = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Book Your Bus</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="pickupLocation" className="block text-gray-700">Pickup Location</label>
        <input type="text" id="pickupLocation" placeholder="Enter pickup location" className="form-input w-full mt-1 rounded-lg" />
      </div>
      <div>
        <label htmlFor="dropoffLocation" className="block text-gray-700">Drop-off Location</label>
        <input type="text" id="dropoffLocation" placeholder="Enter drop-off location" className="form-input w-full mt-1 rounded-lg" />
      </div>
      <p className="text-gray-600">
      <Connect></Connect></p>
    </form>
  </div>
);

const YourTrips = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Trips</h2>
    <p className="text-lg text-gray-700">Display your past trips here...</p>
  </div>
);

export default Taxi;
