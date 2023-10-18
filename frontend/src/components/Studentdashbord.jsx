import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Studentdashbord = () => {
    const navigate=useNavigate()
    return (
        
        <>
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-2xl font-bold">Student Panel</a>
            <ul className="flex space-x-4">
              <Link to='/'><li><a href="#" className="text-white">Home</a></li></Link>
              <li><a href="#" className="text-white">About</a></li>
    
             <li onClick={(()=>{
                localStorage.removeItem('StudentId')
                navigate('/')
             })}><a href="#" className="text-white">Logout</a></li>
            </ul>
          </div>
        </nav>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.8.12/tailwind-experimental.min.css"
      />
        <div className="flex bg-gray-100 min-h-screen">
          <aside className="hidden sm:flex sm:flex-col">
            <a href="#" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
              <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
                <title>Company logo</title>
                <path d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z" fill="#fff" />
              </svg>
            </a>
            <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
              <nav className="flex flex-col mx-4 my-6 space-y-4">
                <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span className="sr-only">Folders</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg">
                  <span className="sr-only">Dashboard</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                  <span className="sr-only">Teams</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover-bg-gray-700 focus-text-gray-400 focus-bg-gray-700 rounded-lg">
                  <span className="sr-only">Calendar</span>
                  <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                  </svg>
                </a>
              </nav>
              <button className="text-red-600 hover:text-red-400 py-3 px-4 border-t w-full">
                Sign Out
              </button>
            </div>
          </aside>
          
        </div>
        </>  
        
    );
}

export default Studentdashbord;
