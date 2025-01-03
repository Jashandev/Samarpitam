import React from "react";
import Navbar from "./components/Navbar";
import API from './Context/API/api_state'
import DATA from './Context/DATA/data_state'
import { createBrowserRouter, Outlet } from "react-router-dom";
import Blogs from './components/Blogs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Doctor from './components/Doctor'
import Footer from './components/Footer'
import Blog_info from './components/Blog_info'
import Blog_data from './components/Blog_data'
import Error from './components/Error'
import Status from './components/Status'
import Scroll from './components/Scroll'
import TC from './components/TC'
import GoogleAnalytics from "./components/GoogleAnalytics";

function App() {
  return (
    <>
      <API>
        <DATA>
          <Navbar></Navbar>
          <GoogleAnalytics />
          <Scroll />
          <div className="mt-[72px] md:mt-[68px] min-h-[90vh] overflow-x-hidden bg-sky-100">
            <Outlet />
          </div>
          <Footer></Footer>
        </DATA>
      </API>
    </>
  );
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "Blogs",
        element: <Blogs />,
      },
      {
        path: "Testimonials",
        element: <Testimonials />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Doctor",
        element: <Doctor />,
      },
      {
        path: "Blog_info",
        element: <Blog_info />,
      },
      {
        path: "Blog_info/:name",
        element: <Blog_data />,
      },
      {
        path: "Status",
        element: <Status />,
      },
      {
        path: "Terms&Conditions",
        element: <TC />,
      },
    ]
  },
  {
    path: '/Login',
    element: <API><DATA><Login /></DATA></API>,
    errorElement: <Error />
  },
  {
    path: '/Register',
    element: <API><DATA><Register /></DATA></API>,
    errorElement: <Error />
  },
]);

export default router;