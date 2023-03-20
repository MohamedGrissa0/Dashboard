import React from "react";
import {FaTrashAlt} from 'react-icons/fa';
import Review from "./Review";

export default function ReviewCard(props) {
        return (<div class="max-w-sm w-full lg:max-w-full lg:flex my-2 shadow-xl">
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
          
            <div class="text-gray-900 font-bold text-xl mb-2">{props.place}</div>
            <p class="text-gray-700 text-base">{props.review}.</p>
          </div>
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-4" src={props.icon} alt="Avatar of user"/>
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Jonathan Reinink</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>


    );
}
