import React from 'react';

const PriceCard = ({price}) => {
 
  return (
    <div className='bg-pink-600 rounded-lg p-4 text-pink-50'>
      <h2 className='text-2xl font-bold'>{price.product}</h2>
      <p className="text-sm py-2">{price.description}</p>
      <div className="flex justify-between">
      <p className="text-xl font-bold">${price.price}</p>
      <p className="text-bold text-sm bg-pink-900 px-2 py-1 rounded-lg">{price.category}</p>
      </div>
    </div>
  );
};

export default PriceCard;