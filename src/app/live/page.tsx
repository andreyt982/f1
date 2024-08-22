"use client";
/* eslint-disable @next/next/no-img-element */
import { live } from "@/helpers/content";
import { useEffect, useState } from "react";

export default function Live(): JSX.Element {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeVideoSource, setActiveVideoSource] = useState("");
  useEffect(() => {
    if (window) {
      setWindowWidth(window.innerWidth);
    }

    if (windowWidth < 768) {
      setActiveVideoSource("https://d.daddylivehd.sx/embed/stream-60.php");
    } else {
      setActiveVideoSource("https://deporte-libre.futbol/en-vivo-online/dazn-formula-1-es/embed2.php");
    }
  }, [windowWidth]);

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
      <iframe width={"100%"} height={"900px"} allowFullScreen src={activeVideoSource} {...(windowWidth < 768 && { sandbox: "allow-scripts" })} allow="autoplay" title="iframe"></iframe>
    </>
  );
}
