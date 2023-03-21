import React , {useState,useEffect} from 'react'
import axios from "axios"
import ReviewCard from './ReviewCard';

export default function Review() {
  const [Reviews, setReviews] = useState([]);
  const [DATA,SETDATA] =useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/reviews/`)
      .then((response) => {
        setReviews(response.data);
        console.log(response.data) // Update the users array with the response data from the Axios request
        // Use the "users" variable in maps or any other operations
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" mt-[90px] container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
    {Reviews  .map((review) => (
        <ReviewCard
          place = {review.username} 
          review={review.comments}
          icon = {review.icon}
          rate={review.Rate}
          date={review.createdAt}/>
    ))}
  </div>
  )
}
