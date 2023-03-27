import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ReviewID() {
    const [data, setData] = useState([{}])
    const [loading, setloading] = useState(true)
    const {id}=useParams()
    console.log(data) 
    useEffect(async() => {
      await  axios.get("http://localhost:4000/api/reviews/"+id).then(res=>{
            setData(res.data)
            console.log(res.data) 

            setloading(false)
          }).catch(e=>{
            setloading(false)
            console.log(e)
          })
    }, [])
  return (
    <div className={!loading?'mt-20':"hidden"}>
 <div>
      
      <div class="max-w-full mt-20 px-10">
      
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="p-4 flex justify-end">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"/>
            </div>
          </div>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr >
                <th scope="col" class="p-4">
                 
                </th>
                <th scope="col" class="px-6 py-3">
                 
                <span class=" flex justify-center">Username</span>  
                </th>
                <th scope="col" class="px-6 py-3">
                 
                <span class=" flex justify-center">Rate</span>  
                </th>
                <th scope="col" class="px-6 mx-auto    py-3">
                 
                <span class=" flex justify-center">Comment</span>  
                </th>
                <th scope="col" class="px-6 py-3">
                 
                <span class=" flex justify-center">Reviews</span> 
                </th>
               
                <th scope="col" class="px-6  flex justify-center py-3">
                  <span class="">Delete Reviews</span>
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class=" flex justify-center">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(d=>(
                  <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    
                  </td>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                 <span className=' flex justify-center '>{d.username}</span>
                  </th>
                  <td class="px-6 py-4">
                  <span className=' flex justify-center '>{d.Rate}</span>   
                 
                  </td>
                  <td class="px-6 py-4">
                    
                  <span className=' flex justify-center '>{d.comments}</span>   
                  </td>
                  <td class="px-6 py-4">
                    
                  <span className=' flex justify-center '>{d.postId}</span>   
                  </td>
                  <td class="px-6 py-4 text-right">
                  <a href={"/delete/reviews/"+d._id} class="font-medium flex justify-center  text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                
                      </td>
                  <td class="px-6 py-4 text-right">
                 
                    <a href={"/edit/"+d._id} class="font-medium flex justify-center text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              
                ))
              }
             
            </tbody>
          </table>
        </div>
        </div>
          </div>
          </div>
  )
}
