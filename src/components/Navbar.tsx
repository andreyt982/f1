/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar(): JSX.Element {
  const [navActive, setNavActive] = useState(false);

  const links = {
    internals: ["Live", "Calendar", "Replays", "Countdown"],

    externals: [
      { name: "Drivers", link: "https://www.formula1.com/en/results/2024/drivers" },
      { name: "Constructors", link: "https://www.formula1.com/en/results/2024/team" },
    ],
  };
  return (
    <nav className="flex items-center justify-between z-40 px-4 py-6 fixed w-full bg-black text-white">
      <Link href="/">
        <img src="/F1_(white).svg" alt="" />
      </Link>
      <svg
        onClick={() => {
          setNavActive(!navActive);
        }}
        className="xl:hidden w-8 h-8 cursor-pointertext-white"
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
        {links.internals.map((link, index) => {
          return (
            <Link
              href={link.toLowerCase()}
              className="hover:text-red-600"
              key={index}
              onClick={() => {
                setNavActive(!navActive);
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
