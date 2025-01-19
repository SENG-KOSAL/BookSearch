import React from 'react'
import { Reviews } from '../lib/data'

const reviews = () => {
  
 
  return (
    <>
     <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold mb-10">
          Client's Reviews
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {Reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{review.name}</h2>
              <p className="text-gray-600 mb-4">{review.feedback}</p>
              <div className="text-orange-500 text-xl">
                {'★'.repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 && '½'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default reviews