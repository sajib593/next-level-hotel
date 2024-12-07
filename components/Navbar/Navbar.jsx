"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for routing
import cc from "../../images/cc.jpg"; // Import an image for the navbar

const Navbar = () => {
  const { data: session, status } = useSession(); // Destructure session and status

  // If session is loading, return loading UI
  if (status === "loading") {
    return <div>Loading...</div>; // You can replace this with a spinner or skeleton loader
  }

  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
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
                <a>Management</a>
                <ul className="p-2">
                  <li>
                    <a>Footage</a>
                  </li>
                  <li>
                    <a>Control room</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Swimming Pool</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="text-xl">
            <img
              className="w-14"
              src="https://i.ibb.co/T2ZmBr6/lv-removebg-preview.png"
              alt="Logo"
            />

            {/* <Image src={https://i.ibb.co/T2ZmBr6/lv-removebg-preview.png} alt='logo' width={14} height={14} /> */}
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Swimming Pool</a>
            </li>
            <li>
              <details>
                <summary>Management</summary>
                <ul className="p-2">
                  <li>
                    <a>Footage</a>
                  </li>
                  <li>
                    <a>Control room</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              {/* <a>Gym</a> */}
              <Link href={"/gym"}>Gym</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end space-x-2">
          {!session ? (
            <>
              <Link href={"/signup"} className="btn px-4">
                SignUp
              </Link>
              <Link href={"/login"} className="btn px-4">
                Login
              </Link>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              {/* User Avatar */}
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt="User Avatar"
                    className="w-full h-full rounded-full"
                  />
                ) : (
                  session.user.name
                    ? session.user.name[0].toUpperCase()
                    : session.user.email[0].toUpperCase()
                )}
              </div>
              <span className="text-sm font-medium">
                {session.user.name || session.user.email}
              </span>
              <button onClick={() => signOut()} className="btn px-4">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
