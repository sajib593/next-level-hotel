"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for routing
import cc from "../../images/cc.jpg"; // Import an image for the navbar

const Navbar = () => {
  const [showCCTVs, setShowCCTVs] = useState(false);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Gym</a>
              </li>
              <li>
                <a onClick={() => setShowCCTVs(!showCCTVs)}>Management</a>
                <ul className="p-2">
                  <li>
                    <Link href="/cctv">Control Room</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>Swimming Pool</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              className="w-14"
              src="https://i.ibb.co/T2ZmBr6/lv-removebg-preview.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Swimming Pool</a>
            </li>
            <li>
              <details>
                <summary onClick={() => setShowCCTVs(!showCCTVs)}>
                  Management
                </summary>
                <ul className="p-2">
                  <li>
                    <Link href="/cctv">Control Room</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Gym</a>
            </li>
          </ul>
        </div>
      </div>
      {showCCTVs && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="card">
            <Link href="/cctv">
              <Image
                src={cc}
                alt="CCTV Foot"
                className="w-full rounded-lg shadow-lg cursor-pointer"
                layout="responsive"
                placeholder="blur"
              />
            </Link>
            <p className="text-center mt-2">CCTV Monitoring</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;