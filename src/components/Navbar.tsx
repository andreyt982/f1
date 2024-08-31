/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar(): JSX.Element {
  const [navActive, setNavActive] = useState(false);
  const path = usePathname();

  const links = {
    internals: ["Live", "Calendar", "Countdown", "Replays"],

    externals: [
      { name: "Drivers", link: "https://www.formula1.com/en/results/2024/drivers" },
      { name: "Constructors", link: "https://www.formula1.com/en/results/2024/team" },
    ],
  };
  return (
    <nav className="flex items-center justify-between z-40 px-4 py-6 fixed w-full bg-black text-white">
      <Link href="/" onClick={()=>{navActive && setNavActive(false)}}>
        <img src="/F1_(white).svg" alt="" />
      </Link>

      <span
        className="menu xl:hidden cursor-pointer text-white"
        onClick={() => {
          setNavActive(!navActive);
        }}
      >
        {navActive ? (
          <svg className=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
          </svg>
        ) : (
          <svg className="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
          </svg>
        )}
      </span>

      <div
        className={`${
          navActive ? "flex xl:static flex-col w-full absolute py-6 top-16 left-0 bg-black" : "hidden xl:flex"
        }  justify-center  items-center p-0 links gap-3 xl:flex-row xl:h-auto xl:w-auto`}
      >
        {links.internals.map((link, index) => {
          return (
            <Link
              href={link.toLowerCase()}
              className={`hover:text-red-600 ${link.toLowerCase() == path.slice(1) ? "text-red-600" : "text-white"}`}
              key={index}
              onClick={() => {
                setNavActive(false);
              }}
            >
              {link}{" "}
            </Link>
          );
        })}

        <div className="dropdown relative">
          <button className="flex items-center">
            <span>Standings</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute -left-10 rounded-lg hidden p-4 z-50 bg-black border border-gray-600">
            {Object.values(links.externals).map((link, index) => {
              return (
                <Link
                  href={link.link.toLowerCase()}
                  className="hover:text-red-600"
                  key={index}
                  onClick={() => {
                    setNavActive(!navActive);
                  }}
                  target="_blank"
                >
                  {link.name}{" "}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
