"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log(session?.user?.image);

  const navLink = (
    <>
      <li>
        {" "}
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        {" "}
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        {" "}
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        {" "}
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        {" "}
        <Link href={"/my-bookings"}>My Bookings</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar w-11/12 mx-auto py-10">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            <Image alt="logo" width={100} height={86} src={logo}></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          {status == "authenticated" ? (
            <>
              <Image
                width={50}
                height={500}
                alt="
                user photo"
                className="rounded-full"
                src={session?.user?.image}
              ></Image>

              <button
                onClick={() => signOut()}
                className="btn outline  outline-[#FF3811] text-[#FF3811]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                className="btn outline  outline-[#FF3811] text-[#FF3811]"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                className="btn outline  outline-[#FF3811] text-[#FF3811]"
              >
                Register
              </Link>
            </>
          )}
          <button className="btn outline  outline-[#FF3811] text-[#FF3811]">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
