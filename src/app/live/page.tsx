"use client";
/* eslint-disable @next/next/no-img-element */
import { live } from "@/helpers/content";
import { useState } from "react";

export default function Live(): JSX.Element {
  const [activeVideoSource, setActiveVideoSource] = useState("https://deporte-libre.futbol/en-vivo-online/dazn-formula-1-es/embed3.php");
  return (
    <>
      <div className="live flex items-center justify-center gap-4 md:gap-6 xl:gap-8 w-full">
        {Object.entries(live.channels).map((channel, index) => {
          return (
            <div className="dropdown inline-block relative" key={index}>
              <button className="flex items-center">
                <img src={channel[1].images.toString()} width={"200px"} className="shadow-md p-2 md:p-4  rounded-lg cursor-pointer" alt="channel" />
              </button>

              <ul className="dropdown-menu absolute left-0  hidden z-50 bg-white rounded-lg text-black shadow-2xl border border-gray-200 w-full flex-col" key={index}>
                {channel[1].links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="cursor-pointer p-2  hover:bg-black rounded-lg hover:text-white"
                      onClick={() => {
                        setActiveVideoSource(link);
                      }}
                    >
                      Link {index + 1}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <iframe width={"100%"} height={"900px"} allowFullScreen src={activeVideoSource} title="iframe"></iframe>
    </>
  );
}
