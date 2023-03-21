import React , {useState} from "react";
import { FaStar, FaRegStar, FaTrash } from 'react-icons/fa';
import Review from "./Review";

export default function ReviewCard(props) {

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i < props.rate ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} />
        )
      );
    }
    return stars;
  };

  

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <p className="text-gray-700 text-sm mb-4">{props.review}</p>
      <div className="flex items-center mb-2">
        <i className="fas fa-map-marker-alt text-gray-400 "></i>
        <p className="text-gray-700 text-sm">{props.place}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex">{renderStars()}</p>
        <button
        
          className="text-red-500 text-center flex flex-col items-center text-sm mt-4"
        >
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>
    </div>
  );
};


