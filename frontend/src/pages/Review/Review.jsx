import React from 'react'
import ReviewCard from './ReviewCard';

export default function Review() {
  const reviews = [
    { id: 1, place: "Restaurant A", review: "This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing!" , icon:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 1, place: "Restaurant A", review: "This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing!" , icon:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 1, place: "Restaurant A", review: "This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing!" , icon:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 1, place: "Restaurant A", review: "This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing!" , icon:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 1, place: "Restaurant A", review: "This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing!" , icon:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 1, place: "Restaurant A", review: "This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing This place was amazing!" , icon:"https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];
  return (
    <div className=" mt-[90px] container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    {reviews.map((review) => (
        <ReviewCard
          place = {review.place} 
          review={review.review}
          icon = {review.icon}
         
        />
    ))}
  </div>
  )
}
