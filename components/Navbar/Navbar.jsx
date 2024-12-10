'use client'

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Gym</a></li>
            <li>
              <a>Management</a>
              <ul className="p-2">
                <li><a>Footage</a></li>
                <li><a>Control room</a></li>
              </ul>
            </li>
            <li><a>Swimming Pool</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className="w-14" src="https://i.ibb.co/T2ZmBr6/lv-removebg-preview.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href='/pool'>Swimming Pool</Link></li>
          <li>
            <details>
              <summary>Management</summary>
              <ul className="p-2">
                <li><a>Footage</a></li>
                <li><a>Control room</a></li>
                <li><Link href='/pool-users'>Pool Users</Link></li>
              </ul>
            </details>
          </li>
          <li><a>Gym</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  )
}

export default Navbar