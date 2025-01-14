import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div>
      <ul>
        <NavLink className="relative flex flex-col items-center justify-center text-center z-10">
          <p>Login</p>
          <hr className="mt-2 mb-4 ml-2 mr-6 font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4"></hr>
        </NavLink>
      </ul>
      </div>
      <div>
      <ul>
        <NavLink className="relative flex flex-col items-center justify-center text-center z-10">
          <p>Signup</p>
          <hr className="mt-2 mb-4 ml-2 mr-6 font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4"></hr>
        </NavLink>
      </ul>
      </div>
      <div>
      <ul>
        <NavLink className="relative flex flex-col items-center justify-center text-center z-10">
          <p>Dashboard</p>
          <hr className="mt-2 mb-4 ml-2 mr-6 font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4"></hr>
        </NavLink>
      </ul>
      </div>
      <div>
      <ul>
        <NavLink className="relative flex flex-col items-center justify-center text-center z-10">
          <p>About</p>
          <hr className="mt-2 mb-4 ml-2 mr-6 font-semibold font-montserrat text-blue-500 bg-white rounded py-2 px-4"></hr>
        </NavLink>
      </ul>
      </div>
    </div>
  )
}

export default Navbar