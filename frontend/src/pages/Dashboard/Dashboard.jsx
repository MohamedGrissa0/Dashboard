import React from 'react'
import { useState , useEffect } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import ReviewsIcon from '@mui/icons-material/Reviews';
export default function Dashboard() {
    const [toggleMenu,setToggleMenu]=useState(false)
    const [toggleSetting,setToggleSetting]=useState(false)
    const [Users,setUsers]=useState()
    const [Posts,setPosts]=useState()
    const [Reviews,setReviews]=useState()


    useEffect(() => {
      axios
        .get(`http://localhost:4000/api/users/`)
        .then((response) => {
          setUsers(response.data.length);
          console.log(response.data.length) // Update the users array with the response data from the Axios request
          // Use the "users" variable in maps or any other operations
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    useEffect(() => {
      axios
        .get(`http://localhost:4000/api/places/`)
        .then((response) => {
         setPosts(response.data.length);
          console.log(response.data.length) // Update the users array with the response data from the Axios request
          // Use the "users" variable in maps or any other operations
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    useEffect(() => {
      axios
        .get(`http://localhost:4000/api/reviews/`)
        .then((response) => {
         setReviews(response.data.length);
          console.log(response.data.length) // Update the users array with the response data from the Axios request
          // Use the "users" variable in maps or any other operations
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <div>
         


<div class="p-4 ">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
   <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
   <div class="statistic-card bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
  <div class="statistic-header flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
    <h3 class="statistic-title text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Number of Users</h3>
    <div class="statistic-icon bg-green-100 text-green-600 rounded-full p-2">
     <PeopleIcon/>
    </div>
  </div>
  <div class="statistic-body text-center px-6 py-4">
    <p class="statistic-count text-4xl font-bold text-gray-700 dark:text-gray-300">{Users}</p>
  </div>
</div>




  <div class="statistic-card bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div class="statistic-header flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h3 class="statistic-title text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Number of Posts</h3>
      <div class="statistic-icon bg-purple-100 text-purple-600 rounded-full p-2">
       <ArticleIcon/>
      </div>
    </div>
    <div class="statistic-body text-center px-6 py-4">
      <p class="statistic-count text-4xl font-bold text-gray-700 dark:text-gray-300">{Posts}</p>
    </div>
  </div>
  <div class="statistic-card bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div class="statistic-header flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h3 class="statistic-title text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Number of Reviews</h3>
      <div class="statistic-icon bg-purple-100 text-purple-600 rounded-full p-2">
      <ReviewsIcon/>

      </div>
    </div>
    <div class="statistic-body text-center px-6 py-4">
      <p class="statistic-count text-4xl font-bold text-gray-700 dark:text-gray-300">{Reviews}</p>
    </div>
  </div>
</section>


      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
         </div>
      </div>
   </div>
</div>
    </div>
  )
}
