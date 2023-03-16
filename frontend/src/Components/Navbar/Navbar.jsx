import React from 'react'

import { useState } from 'react'
import {Link} from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupIcon from '@mui/icons-material/Group';export default function Navbar() {
    const [toggleMenu,setToggleMenu]=useState(false)
    const [toggleSetting,setToggleSetting]=useState(false)
  return (
    <div>
      <nav class="fixed  top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div class="px-3 py-3 lg:px-5 lg:pl-3">
    <div class="flex items-center justify-between">
      <div class="flex items-center justify-start">
        <button onClick={()=>{setToggleMenu(!toggleMenu)}}  type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <Link to="/" class="flex ml-2 md:mr-24">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Reviewhub</span>
        </Link>
      </div>
      <div class="flex  relative items-center">
          <div class="flex items-center ml-3">
            <div>
            <button onClick={()=>{setToggleSetting(!toggleSetting)}} type="button" class="flex mr-6 text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-200 ">
                <span class="sr-only">Open user menu</span>
                <AccountCircleIcon className='text-white' />   </button>
            </div>
            <div class={toggleSetting?"z-50 bg-white absolute top-4 right-0  my-4 text-base list-none    rounded-2xl shadow-2xl ":"hidden"} id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <Link to="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                </li>
                <li>
                  <Link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</Link>
                </li>
            
                <li>
                  <Link to="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" class={!toggleMenu?"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform hidden bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700":"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 translate-x-0 dark:bg-gray-800 dark:border-gray-700"}>
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2">
         <li>
            <Link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            
                   <DashboardIcon  />
               <span class="ml-3">Dashboard</span>
            </Link>
         </li>
         <li>
            <Link to="/form" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
             
             
            <InsertDriveFileIcon />
                <span class="flex-1 ml-3 whitespace-nowrap">Form</span>
             </Link>
         </li>
         <li>
            <Link to="/places" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <ApartmentIcon />
                <span class="flex-1 ml-3 whitespace-nowrap">All places</span>
                </Link>
         </li>
         <li>
            <Link to="/reviews" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <RateReviewIcon />
                 <span class="flex-1 ml-3 whitespace-nowrap">Reviews</span>
            </Link>
         </li>
         <li>
            <Link to="/users" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <GroupIcon   />
              
               <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
            </Link>
         </li>
       
       
        
      </ul>
   </div>
</aside>
    </div>
  )
}
