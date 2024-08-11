"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar(): JSX.Element {
  const [navActive, setNavActive] = useState(false);
  return (
    <nav className="flex items-center justify-between z-40 px-4 py-6 fixed w-full bg-black">
      <Link href="/">
        <img src="/F1_(white).svg" alt="" />
      </Link>
      <svg
        onClick={() => {
          setNavActive(!navActive);
        }}
        className="xl:hidden w-8 h-8 cursor-pointer text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
      </svg>

      <div
        className={`${
          navActive ? "flex xl:static flex-col w-full absolute  h-40 top-16 left-0 bg-black" : "hidden xl:flex"
        }  justify-center  items-center p-0 links gap-3 xl:flex-row xl:h-auto xl:w-auto`}
      >
        <Link href="/live" className="hover:text-red-600">
          Live
        </Link>

        <div className="dropdown inline-block relative">
          <button className="flex items-center">
            <span>Standings</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute left-0 hidden p-4 z-50 bg-black border border-gray-600">
            <li>
              <Link href="https://www.formula1.com/en/results/2024/drivers" target="_blank" className="hover:text-red-600">
                Drivers
              </Link>
            </li>
            <li>
              <Link href="https://www.formula1.com/en/results/2024/team" target="_blank" className="hover:text-red-600">
                Constructors
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/calendar" className="hover:text-red-600">
          Calendar
        </Link>
        <Link href="/replays" className="hover:text-red-600">
          Replays
        </Link>
      </div>
    </nav>
  );
}
