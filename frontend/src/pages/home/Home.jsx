import React from "react";
import { useNavigate } from "react-router-dom";
// import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-indigo-50 pb-20 dark:from-blue-1100 dark:to-blue-1200  landing-page tablet lg:desktop">
        <svg viewBox="0 0 795 607" width="795" height="607" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 opacity-60 dark:opacity-50 lg:top-9">
          <circle cx="397.5" cy="397.5" r="397" className="stroke-indigo-100 dark:stroke-indigo-1000" strokeOpacity="0.8"></circle>
          <path d="M698.5 397c0 165.96-134.76 300.5-301 300.5S96.5 562.96 96.5 397s134.76-300.5 301-300.5 301 134.54 301 300.5Z" className="stroke-indigo-100 dark:stroke-indigo-1000" strokeOpacity="0.8"></path>
          <path d="M598.5 396c0 110.73-89.99 200.5-201 200.5s-201-89.77-201-200.5 89.99-200.5 201-200.5 201 89.77 201 200.5Z" className="stroke-indigo-100 dark:stroke-indigo-1000" strokeOpacity="0.8"></path>
          <circle cx="667.5" cy="105.5" r="9.5" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900"></circle>
          <circle cx="667.5" cy="105.5" r="9" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900" strokeOpacity="0.8"></circle>
          <circle cx="587.5" cy="327.5" r="9.5" className="dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900"></circle>
          <circle cx="587.5" cy="327.5" r="9" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900" strokeOpacity="0.8"></circle>
          <circle cx="419.5" cy="597.5" r="9.5" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900"></circle>
          <circle cx="419.5" cy="597.5" r="9" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900" strokeOpacity="0.8"></circle>
          <circle cx="27.5" cy="249.5" r="9.5" className="dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900"></circle>
          <circle cx="27.5" cy="249.5" r="9" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900" strokeOpacity="0.8"></circle>
          <circle cx="656.5" cy="551.5" r="9.5" className="dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900"></circle>
          <circle cx="656.5" cy="551.5" r="9" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900" strokeOpacity="0.8"></circle>
          <circle cx="222.5" cy="492.5" r="9.5" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900"></circle>
          <circle cx="222.5" cy="492.5" r="9" className="fill-indigo-25 dark:fill-indigo-1000 stroke-indigo-100 dark:stroke-indigo-900" strokeOpacity="0.8"></circle>
        </svg>
        <div className="mt-14 flex w-full items-center justify-center sm:mt-20 sm:pt-2 lg:mt-16" style={{ maxWidth: "873px", zIndex: 9 }}>
          <div className="mx-7 flex w-full flex-col items-center justify-center space-y-10">
            <h1 className="text-4xl pb-2 font-medium text-center bg-gradient-to-r from-indigo-500 to-purple-700 bg-clip-text text-transparent dark:text-gray-50 sm:text-5xl lg:text-6xl">Welcome to MindSpring </h1>
            <p className="text-lg text-center text-gray-900 dark:text-gray-100 lg:text-xl max-w-lg">Level up with hands-on courses &amp; projects. Learn smarter with AI that adapts to your needs.</p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <button className="px-6 py-3 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition duration-300" onClick={() => navigate("/courses")}>Get Started</button>

            </div>
            <div className="mt-12 flex flex-col items-center justify-center">
              <p className="text-base text-center text-gray-900 dark:text-gray-100">Join <span className="font-bold text-indigo-400 dark:text-indigo-200"></span> developers working in companies like</p>
              <div className="mt-4 flex items-center justify-center space-x-6">


                <svg viewBox="0 0 71 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-20 dark:hidden">
                  <g clipPath="url(#meta-logo-a)">
                    <path d="M3.1 9.2c0 .8.2 1.4.4 1.8.3.5.8.7 1.2.7.6 0 1.2-.2 2.2-1.6l2.5-3.8 1.1-1.7c.8-1.2 1.7-2.5 2.7-3.4C14.1.5 15 .1 16 .1c1.5 0 3 .9 4.1 2.5C21.3 4.4 22 6.7 22 9.1c0 1.4-.3 2.4-.8 3.2-.5.8-1.4 1.6-2.9 1.6v-2.2c1.3 0 1.7-1.2 1.7-2.5 0-2-.5-4-1.5-5.6-.7-1-1.6-1.7-2.6-1.7s-2 .8-3 2.2L11.3 7 10.5 8a29.2 29.2 0 0 1-2.3 3.8c-1.1 1.5-2.1 2.1-3.5 2.1-1.5 0-2.5-.7-3-1.7a6 6 0 0 1-.8-3H3Z" fill="#0081FB"></path>
                    <path d="M2.7 2.8C3.7 1.2 5.2 0 6.9 0c1 0 2 .3 3 1.1 1.2 1 2.4 2.4 3.9 5l.5.8a37 37 0 0 0 2.5 3.8c.5.7 1 .9 1.4.9 1.3 0 1.7-1.2 1.7-2.5l2-.1c0 1.4-.3 2.4-.8 3.2-.5.8-1.4 1.6-2.9 1.6-.9 0-1.7-.2-2.6-1-.7-.7-1.6-1.9-2.2-3l-1.9-3c-1-1.6-1.8-2.8-2.3-3.3C8.7 3 8 2.4 7 2.4c-1 0-1.7.6-2.3 1.5l-2-1.1Z" fill="url(#meta-logo-b)"></path>
                    <path d="M6.9 2.4c-1 0-1.7.6-2.3 1.5A10 10 0 0 0 3 9.2c0 .8.2 1.4.4 1.8l-1.9 1.2a6 6 0 0 1-.7-3c0-2.3.6-4.6 1.8-6.4C3.7 1.2 5.2 0 6.9 0v2.3Z" fill="url(#meta-logo-c)"></path>
                    <path d="M26.3.5h2.6l4.4 8 4.5-8h2.6v13.2h-2.2V3.6l-3.9 7h-2l-3.9-7v10h-2.1V.7Zm20.8 5c-1.6 0-2.5 1-2.7 2.5h5.2c-.1-1.5-1-2.6-2.5-2.6Zm-4.8 3.3c0-3 2-5.2 4.8-5.2s4.5 2.2 4.5 5.4v.5h-7.2c.2 1.6 1.3 2.6 3 2.6a4 4 0 0 0 2.9-1.1l1.1 1.4a6 6 0 0 1-4.1 1.5c-3.2 0-5-2.3-5-5.1Zm12-3.2h-2V4h2V1h2V4h3v1.7h-3V10c0 1.5.5 2 1.7 2h1.3v1.6c-.6.2-1.1.3-1.7.3-2.2 0-3.4-1.2-3.4-3.6V5.6ZM68 7.3c-.4-1-1.4-1.8-2.7-1.8-1.8 0-3 1.2-3 3.3 0 2 1.1 3.2 2.9 3.2 1.4 0 2.4-.8 2.8-1.8V7.3Zm2 6.4h-2v-1.4c-.5.8-1.6 1.6-3.2 1.6-2.7 0-4.5-2.2-4.5-5.1 0-3 1.8-5.2 4.6-5.2 1.3 0 2.4.6 3.1 1.5V4h2v9.8Z" fill="#192830"></path>
                  </g>
                  <defs>
                    <linearGradient id="meta-logo-b" x1="5.3" y1="8.6" x2="19.8" y2="9.3" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0064E1"></stop>
                      <stop offset=".4" stopColor="#0064E1"></stop>
                      <stop offset=".8" stopColor="#0073EE"></stop>
                      <stop offset="1" stopColor="#0082FB"></stop>
                    </linearGradient>
                    <linearGradient id="meta-logo-c" x1="4.2" y1="10.1" x2="4.2" y2="4.9" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0082FB"></stop>
                      <stop offset="1" stopColor="#0064E0"></stop>
                    </linearGradient>
                    <clipPath id="meta-logo-a">
                      <path fill="#fff" transform="translate(.8)" d="M0 0h69.3v13.8H0z"></path>
                    </clipPath>
                  </defs>
                </svg>

                <svg viewBox="0 0 66 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-20">
                  <path d="M28.4 11.7c0 3.2-2.5 5.4-5.5 5.4s-5.4-2.2-5.4-5.4c0-3 2.5-5.4 5.4-5.4 3 0 5.5 2.3 5.5 5.4Zm-2.4 0c0-1.9-1.4-3.2-3-3.2-1.7 0-3.1 1.3-3.1 3.2 0 2 1.4 3.3 3 3.3 1.7 0 3-1.3 3-3.3Z" className="fill-red-500 dark:fill-gray-D100"></path>
                  <path d="M40 11.7c0 3.2-2.4 5.4-5.4 5.4-3 0-5.4-2.2-5.4-5.4 0-3 2.5-5.4 5.4-5.4 3 0 5.5 2.3 5.5 5.4Zm-2.3 0c0-1.9-1.4-3.2-3-3.2-1.7 0-3.1 1.3-3.1 3.2 0 2 1.4 3.3 3 3.3 1.7 0 3.1-1.3 3.1-3.3Z" className="fill-yellow-500 dark:fill-gray-D100"></path>
                  <path d="M51.3 6.7v9.7c0 4-2.4 5.6-5.2 5.6a5.2 5.2 0 0 1-4.7-3.2l2-.9a3 3 0 0 0 2.7 2c1.8 0 3-1.1 3-3.2v-.8h-.2c-.5.7-1.5 1.2-2.8 1.2a5.4 5.4 0 0 1-5.2-5.3c0-3 2.5-5.5 5.2-5.5 1.3 0 2.3.6 2.8 1.2h.1v-.8h2.3Zm-2.1 5c0-1.8-1.3-3.2-2.9-3.2-1.6 0-3 1.4-3 3.3 0 1.8 1.4 3.2 3 3.2s2.9-1.4 2.9-3.2Z" className="fill-blue-500 dark:fill-gray-D100"></path>
                  <path d="M55 1v15.8h-2.3V1H55Z" className="fill-green-600 dark:fill-gray-D100"></path>
                  <path d="m64 13.5 1.9 1.3c-.6.8-2 2.3-4.5 2.3-3.1 0-5.4-2.3-5.4-5.4 0-3.2 2.3-5.4 5.1-5.4s4.2 2.3 4.6 3.5l.3.6-7.3 3a3 3 0 0 0 5.3.1Zm-5.6-2 4.8-2c-.3-.6-1-1-2-1a3 3 0 0 0-2.8 3Z" className="fill-red-500 dark:fill-gray-D100"></path>
                  <path d="M8.7 10.3V8h7.8v1.4c0 1.7-.4 3.9-1.9 5.4A7.7 7.7 0 0 1 8.7 17 8.5 8.5 0 0 1 .2 8.7C.2 4.1 4.2.4 8.7.4a8 8 0 0 1 5.8 2.3l-1.6 1.6c-1-1-2.3-1.7-4.2-1.7a6 6 0 0 0-6 6.1 6 6 0 0 0 6 6.2c2.2 0 3.5-1 4.3-1.7.6-.7 1-1.6 1.2-2.9H8.7Z" className="fill-blue-500 dark:fill-gray-D100"></path>
                </svg>
                <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-20">
                  <path d="m7.6 14.7-2.5.3-2.7-8v8.4l-2.4.3V.3h2.2l3 8.7V.3h2.4v14.4Zm4.6-8.8h3.2v2.4h-3.2V12l4.2-.2V14l-6.5.5V.3h6.5v2.4h-4.2V6Zm12.9-3.2h-2.5v11h-2.3v-11h-2.4V.3H25v2.4Zm3.8 3H32v2.5h-3.2v5.4h-2.3V.3H33v2.4H29v3Zm8 5.8 4 .2v2.4l-6.3-.3V.3h2.3v11.2Zm6 2.8c.7 0 1.5 0 2.3.2V.3h-2.3v14ZM55.4.3l-3 7.3 3 8c-.9 0-1.7-.2-2.6-.4L51 10.8l-1.7 4-2.5-.2 3-7L47.2.2h2.5l1.5 4 1.7-4h2.5Z" className="fill-red-600 dark:fill-gray-D100"></path>
                </svg>
                <svg viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-6">
                  <path d="M20.5 19.4a12.9 12.9 0 0 1-3 4.3c-.6.6-1.3 1-2.1 1-.6 0-1.2-.2-2-.5s-1.5-.5-2.1-.5a6 6 0 0 0-2.2.5 6 6 0 0 1-1.9.5c-.7 0-1.4-.3-2.2-1-.4-.4-1-1-1.7-2a14.2 14.2 0 0 1-2.6-8c0-1.6.3-3 1-4A6.1 6.1 0 0 1 7 6.5a7 7 0 0 1 2.3.5l1.8.6 2-.7c1-.3 2-.5 2.7-.4 2 .1 3.6 1 4.6 2.3a5 5 0 0 0-2.7 4.6 5 5 0 0 0 1.7 3.8c.4.4 1 .8 1.6 1l-.4 1.1Zm-4.6-18a5 5 0 0 1-1.4 3.3c-1 1.2-2.3 2-3.7 1.8v-.4c0-1.2.5-2.4 1.4-3.4.4-.5 1-.9 1.7-1.2.7-.4 1.3-.6 2-.6v.5Z" className="fill-black dark:fill-gray-D100"></path>
                </svg>
                <svg viewBox="0 0 61 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2 h-5 w-20">
                  <path fillRule="evenodd" clipRule="evenodd" d="M37.8 14.4a23.7 23.7 0 0 1-29-2.1c-.4-.3-.1-.7.3-.5a32.2 32.2 0 0 0 28.2 1.7c.6-.2 1.1.4.5.9Z" className="fill-orange-400 dark:fill-gray-D100"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M39.3 12.7c-.5-.6-3-.3-4.2-.2-.3 0-.4-.2 0-.4 2-1.5 5.3-1 5.7-.6.4.5-.1 3.8-2 5.4-.3.3-.6.1-.4-.2.4-1 1.3-3.4.9-4Z" className="fill-orange-400 dark:fill-gray-D100"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M35.2 2V.6c0-.2.2-.3.4-.3h6.2c.2 0 .3.1.3.3v1.2c0 .2-.1.5-.4.9l-3.2 4.6c1.2 0 2.4.1 3.5.7l.3.6V10c0 .2-.2.5-.4.4-2-1-4.5-1.2-6.6 0-.2 0-.4-.2-.4-.4V8.6c0-.2 0-.6.2-1l3.7-5.2h-3.2c-.2 0-.4-.2-.4-.4Z" className="fill-orange-400 dark:fill-gray-D100"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.6 10.6h-1.9a.4.4 0 0 1-.3-.3V.6c0-.1.2-.3.4-.3h1.7c.2 0 .3.1.4.3V2C13.3.7 14.2 0 15.4 0s1.9.6 2.4 1.8A2.7 2.7 0 0 1 20.4 0c.8 0 1.7.3 2.2 1 .6.9.5 2 .5 3v6.2c0 .2-.2.3-.4.3h-1.9a.4.4 0 0 1-.3-.3V3.4c-.2-.7-.6-.9-1.2-.9-.4 0-.9.3-1 .8-.3.5-.3 1.3-.3 1.9v5.1c0 .2-.1.3-.3.3h-2a.4.4 0 0 1-.3-.3V5.2c0-1.1.2-2.7-1.1-2.7C12.9 2.5 13 4 13 5.2v5.1c0 .2-.2.3-.4.3ZM47.5.1c2.8 0 4.3 2.4 4.3 5.5 0 3-1.7 5.2-4.3 5.2-2.8 0-4.3-2.4-4.3-5.4 0-3 1.5-5.3 4.3-5.3Zm0 2C46 2 46 4 46 5 46 6.3 46 9 47.5 9c1.4 0 1.5-2 1.5-3.3a9 9 0 0 0-.3-2.6c-.2-.7-.6-1-1.2-1Zm8 8.5h-2a.4.4 0 0 1-.3-.3V.6c0-.2.2-.3.4-.3h1.7c.2 0 .3.1.3.3V2c.6-1.3 1.4-2 2.7-2 .8 0 1.6.4 2.2 1.2.4.8.4 2.1.4 3v6.1c0 .2-.1.3-.3.3h-2a.4.4 0 0 1-.2-.3V5.1c0-1 0-2.6-1.2-2.6-.5 0-.9.3-1.1.7-.3.6-.3 1.2-.3 1.9v5.2c0 .2-.2.3-.4.3ZM30.2 6c0 .8 0 1.4-.4 2-.3.6-.7.9-1.3.9-.7 0-1.1-.6-1.1-1.4 0-1.6 1.4-1.9 2.8-1.9V6Zm1.9 4.6h-.5c-.6-.5-.7-.7-1-1.2-1 1-1.8 1.4-3.1 1.4-1.6 0-2.9-1-2.9-3 0-1.5.9-2.5 2-3 1-.5 2.5-.6 3.6-.7v-.2c0-.5 0-1-.2-1.4-.3-.4-.7-.5-1.1-.5-.7 0-1.4.4-1.5 1.1 0 .2-.2.4-.3.4l-1.9-.2c-.1 0-.3-.2-.3-.4C25.5.7 27.5 0 29.3 0c.9 0 2 .2 2.8 1 1 .8.8 2 .8 3.2v3c0 .8.4 1.2.7 1.7.2.1.2.3 0 .5l-1.4 1.2ZM5.6 6c0 .8 0 1.4-.4 2-.3.6-.8.9-1.3.9-.7 0-1.1-.6-1.1-1.4 0-1.6 1.4-1.9 2.8-1.9V6Zm1.9 4.6H7c-.6-.5-.7-.7-1-1.2-1.1 1-1.8 1.4-3.2 1.4-1.6 0-2.8-1-2.8-3 0-1.5.8-2.5 2-3 1-.5 2.5-.6 3.6-.7v-.2c0-.5 0-1-.3-1.4-.2-.4-.6-.5-1-.5-.7 0-1.4.4-1.5 1.1 0 .2-.2.4-.4.4L.6 3.3c-.2 0-.3-.2-.3-.4C.7.7 2.7 0 4.5 0c1 0 2.2.2 2.9 1 .9.8.8 2 .8 3.2v3c0 .8.4 1.2.7 1.7.1.1.2.3 0 .5l-1.4 1.2" className="fill-black dark:fill-gray-D100"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full items-center justify-center overflow-hidden bg-white px-20 py-8">
      <h2 className="text-4xl font-bold text-indigo-500 mb-4 p-4  rounded-lg ">
        What people want to say
      </h2>
      <Testimonials />
    </div>
      
      <div className="flex w-full justify-center bg-indigo-50 px-6 py-18 dark:bg-blue-1200 sm:pb-32 lg:pb-36 lg:pt-24">
        <div className="flex w-full flex-col items-center text-center max-w-screen-xl">
          <div className="flex w-full flex-col gap-6 px-10 pb-20 text-center sm:px-28 sm:pb-10 lg:flex-row lg:px-0 lg:text-left">
            <p className="text-2xl font-semibold w-full text-gray-800 dark:text-gray-50">
              Developers and teams learning with Educative
            </p>
            <div className="flex w-full flex-col items-center justify-center text-center">
              <h1 className="text-5xl font-bold min-w-fit text-indigo-500 dark:text-indigo-400">
                2.4+ Million
              </h1>
              <span className="text-lg text-gray-700 dark:text-gray-200">
                Learners
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center text-center">
              <h1 className="text-5xl font-bold min-w-fit text-indigo-500 dark:text-indigo-400">
                1,000+
              </h1>
              <span className="text-lg text-gray-700 dark:text-gray-200">
                Learning Resources
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-center text-center">
              <h1 className="text-5xl font-bold min-w-fit text-indigo-500 dark:text-indigo-400">
                #1
              </h1>
              <span className="text-lg text-gray-700 dark:text-gray-200">
                in Interview Prep
              </span>
            </div>
          </div>

         

          <div className="flex w-full justify-center bg-indigo-50 px-6 py-18 dark:bg-blue-1200 lg:pt-24">
            <div className="flex w-full flex-col items-center text-center max-w-screen-xl">
              <div className="flex w-full items-center justify-between gap-x-4 overflow-hidden rounded-lg border border-solid border-gray-300 bg-gray-100 dark:border-blue-800 dark:bg-blue-900 lg:gap-x-8">
                <div className="flex w-full flex-col items-center gap-4 p-8 text-center sm:w-fit sm:items-start sm:gap-10 sm:py-12 sm:pl-8 sm:pr-0 sm:text-start lg:px-8 lg:py-18">
                  <span className="text-gray-900 dark:text-gray-100 lg:text-2xl text-lg">
                    Get access to our free courses
                  </span>
                  <button className="px-6 py-3 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition duration-300" onClick={() => navigate("/courses")}>Start for free</button>

                </div>
                <div className="hidden h-full rounded-l-full bg-gradient-to-r from-indigo-50 pl-6 pr-2 dark:from-blue-800 sm:flex lg:px-10">
                  <div className="flex h-full flex-col justify-evenly gap-4 py-6 pl-8 lg:pr-8">
                    <div className="flex w-full items-start gap-3 text-start">
                      <div className="flex h-5 w-5 items-center lg:pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                          <circle className="text-indigo-500 dark:text-indigo-400" cx="10" cy="10" r="10" fill="currentColor"></circle>
                          <path className="text-white dark:text-black" stroke="currentColor" strokeWidth="2" d="M15.556 6.667 8.68 13.542l-3.125-3.125"></path>
                        </svg>
                      </div>
                      <p className="text-gray-800 dark:text-gray-200 lg:text-lg text-sm m-0">
                        Dive into dozens of popular tech-skills courses
                      </p>
                    </div>
                    <div className="flex w-full items-start gap-3 text-start">
                      <div className="flex h-5 w-5 items-center lg:pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                          <circle className="text-indigo-500 dark:text-indigo-400" cx="10" cy="10" r="10" fill="currentColor"></circle>
                          <path className="text-white dark:text-black" stroke="currentColor" strokeWidth="2" d="M15.556 6.667 8.68 13.542l-3.125-3.125"></path>
                        </svg>
                      </div>
                      <p className="text-gray-800 dark:text-gray-200 lg:text-lg text-sm m-0">
                        Exclusive access to monthly tech career webinars & trainings
                      </p>
                    </div>
                    <div className="flex w-full items-start gap-3 text-start">
                      <div className="flex h-5 w-5 items-center lg:pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                          <circle className="text-indigo-500 dark:text-indigo-400" cx="10" cy="10" r="10" fill="currentColor"></circle>
                          <path className="text-white dark:text-black" stroke="currentColor" strokeWidth="2" d="M15.556 6.667 8.68 13.542l-3.125-3.125"></path>
                        </svg>
                      </div>
                      <p className="text-gray-800 dark:text-gray-200 lg:text-lg text-sm m-0">
                        Receive weekly industry insights newsletter and special deals
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
