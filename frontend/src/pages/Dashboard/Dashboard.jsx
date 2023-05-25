import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import ReviewsIcon from '@mui/icons-material/Reviews';
export default function Dashboard() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleSetting, setToggleSetting] = useState(false)
    const [Users, setUsers] = useState([])
    const [allUsers, setallUsers] = useState([])

    const [Posts, setPosts] = useState([])
    const [allPosts, setallPosts] = useState([])

    const [Reviews, setReviews] = useState([])
    const [allReviews, setallReviews] = useState([])
    const [sortedReviewsData, setSortedReviewsData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/`).then((response) => {
            setUsers(response.data.length);
            setallUsers(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/places/`).then((response) => {
            setPosts(response.data.length);
            setallPosts(response.data)


      
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/reviews/`).then((response) => {
            setReviews(response.data.length);
            setallReviews(response.data)


        }).catch((error) => {
            console.log(error);
        });
    }, []);


    const lastFive = allUsers.slice(-5)

    const lastFivep = allPosts.slice(-5);

    let lastFiver = allReviews.slice(-5)


    const MostReviewed = allPosts.sort((a, b) => b.REVIEWS.length - a.REVIEWS.length);
    console.log(MostReviewed)

    const fivemostreviewed = MostReviewed.slice(0, 5);


    return (
        <div>


            <div class="p-4 ">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
                    <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div class="statistic-card bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div class="statistic-header flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                                <h3 class="statistic-title text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Number of Users</h3>
                                <div class="statistic-icon bg-green-100 text-green-600 rounded-full p-2">
                                    <PeopleIcon/>
                                </div>
                            </div>
                            <div class="statistic-body text-center px-6 py-4">
                                <p class="statistic-count text-4xl font-bold text-gray-700 dark:text-gray-300">
                                    {Users}</p>
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
                                <p class="statistic-count text-4xl font-bold text-gray-700 dark:text-gray-300">
                                    {Posts}</p>
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
                                <p class="statistic-count text-4xl font-bold text-gray-700 dark:text-gray-300">
                                    {Reviews}</p>
                            </div>
                        </div>
                    </section>


                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  mt-14">
                        <p className="text-2xl font-bold text-center mb-2 text-gray-400 dark:text-gray-500">Recent Users</p>
                        <div className="w-full overflow-x-scroll">
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-700 uppercase text-sm font-medium">
                                        <th className="py-4 px-4 sm:px-6 lg:px-8 text-left">Username</th>
                                        <th className="py-4 px-4 sm:px-6 lg:px-8 text-left">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-800 text-sm font-medium">
                                    {
                                    lastFive.map((item, index) => (
                                        <tr key={
                                                item.username
                                            }
                                            className={
                                                `${
                                                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                                } hover:bg-gray-200 transition-colors duration-200`
                                        }>
                                            <td className="py-4 px-4 sm:px-6 lg:px-8 text-left">
                                                {
                                                item.username
                                            }</td>
                                            <td className="py-4 px-4 sm:px-6 lg:px-8 text-left">
                                                {
                                                item.email
                                            }</td>
                                        </tr>
                                    ))
                                } </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 overflow-x-auto">
                        <p className="text-2xl font-bold mb-2 text-gray-400 text-center dark:text-gray-500">Recent Posts</p>
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Title</th>
                                    <th className="py-3 px-6 text-left">Category</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {
                                lastFivep.map((item) => (
                                    <tr key={
                                            item.title
                                        }
                                        className="bg-white hover:bg-gray-100 transition-colors duration-200">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {
                                            item.title
                                        }</td>
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {
                                            item.category
                                        }</td>
                                    </tr>
                                ))
                            } </tbody>
                        </table>
                    </div>


                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 overflow-x-auto">
                        <p className="text-2xl font-bold mb-2 text-gray-400 text-center dark:text-gray-500">Recent Reviews</p>
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Username</th>
                                    <th className="py-3 px-6 text-left">Comment</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {
                                lastFiver.map((item) => (
                                    <tr key={
                                            item.title
                                        }
                                        className="bg-white hover:bg-gray-100 transition-colors duration-200">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {
                                            item.username
                                        }</td>
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {
                                            item.comments
                                        }</td>
                                    </tr>
                                ))
                            } </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14 overflow-x-auto">
                        <p className="text-2xl font-bold mb-2 text-gray-400 text-center dark:text-gray-500">Most Reviewd</p>
                        <table className="min-w-max w-full table-auto">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Title</th>
                                    <th className="py-3 px-6 text-left">Reviews</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {
                                fivemostreviewed.map((item) => (
                                    <tr key={
                                            item.title
                                        }
                                        className="bg-white hover:bg-gray-100 transition-colors duration-200">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {
                                            item.title
                                        }</td>
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {
                                            item.REVIEWS.length
                                        }</td>
                                    </tr>
                                ))
                            } </tbody>
                        </table>
                    </div>


                    
                </div>
            </div>
        </div>
    )
}
