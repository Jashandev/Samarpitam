import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import API from '../Context/API/api_context'
import Logo from '../Assets/Images/Logo.png'


export default function Navbar(props) {

  let location = useLocation();
  let navigate = useNavigate();

  const Contextdata = useContext(API);
  const { AlertData, LogoutFn } = Contextdata;
  const [api, contextHolder] = AlertData;

  const navigation = [
    { name: 'Dashboard', to: '/', current: location.pathname === '/' ? true : false },
    { name: 'Blogs', to: '/Blogs', current: location.pathname === '/Blogs' ? true : false },
    { name: 'Testimonials', to: '/Testimonials', current: location.pathname === '/Testimonials' ? true : false },
    { name: 'Contact Us', to: '/Contact', current: location.pathname === '/Contact' ? true : false },
    { name: 'Our Team', to: '/Doctor', current: location.pathname === '/Doctor' ? true : false },
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsProfileOpen(false);
    setIsOpen(!isOpen);
  };
  const toggleProfile = () => {
    setIsOpen(false);
    setIsProfileOpen(!isProfileOpen);
  };


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <nav className="bg-gray-800 fixed w-full z-20 top-0 py-1 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8 w-8 rounded-full bg-white" alt="" />
            <span className="self-center text-xl  whitespace-nowrap dark:text-white text-white">Samarpitam</span>
          </Link>


          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            {localStorage.getItem("token") ?

              <>

                <button type="button" onClick={toggleProfile} className="flex justify-center items-center text-sm bg-white border-2 border-solid border-black w-8 h-8 md:mt-0 mt-[3px]  rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <span className="sr-only">Open user menu</span>
                  <UserOutlined className="scale-150" />
                  {/* <image className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"></image> */}
                </button>

                <div className={`z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow md:right-36 right-0  top-12 absolute m-0 ${isProfileOpen ? 'block' : 'hidden'}`} id="user-dropdown">
                  <div className="px-4 py-3 hover:bg-blue-700 hover:text-white cursor-pointer">
                    <span className="block text-lg">
                      {localStorage.getItem("user") ? localStorage.getItem("user").toUpperCase() : "Hello"}</span>
                    <span className="block text-sm">welcome</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                    </li>
                    <li>
                      <Link to='/' onClick={() => LogoutFn()} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Sign out</Link>
                    </li>
                  </ul>
                </div></>

              :

              <button type="button" className="text-white bg-sky-800 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:px-4" onClick={() => navigate("/Login")}>Log IN</button>

            }
            <button data-collapse-toggle="navbar-sticky" onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>


          <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">

              {navigation.map((item) => (
                <li key={item.name}>
                  <Link key={item.name} to={item.to} onClick={toggleMenu}
                    className={classNames(
                      item.current ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500' : 'text-black md:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0',
                      'block py-2 px-3 '
                    )}
                    aria-current="page" >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
      {contextHolder}
    </>
  )
}