import React from 'react';
import { FaShippingFast, FaLock, FaUndoAlt, FaHeadset } from 'react-icons/fa';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <FaShippingFast className="text-orange-500 text-4xl" />,
      title: 'Free Shipping',
      description: 'Order Over $100',
    },
    {
      id: 2,
      icon: <FaLock className="text-orange-500 text-4xl" />,
      title: 'Secure Payment',
      description: '100% Secure Payment',
    },
    {
      id: 3,
      icon: <FaUndoAlt className="text-orange-500 text-4xl" />,
      title: 'Easy Returns',
      description: '10 Days Returns',
    },
    {
      id: 4,
      icon: <FaHeadset className="text-orange-500 text-4xl" />,
      title: '24/7 Support',
      description: 'Call Us Anytime',
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex flex-col items-center">
            {benefit.icon}
            <h3 className="text-xl font-bold mt-4">{benefit.title}</h3>
            <p className="text-gray-500">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
