"use client";
/* eslint-disable @next/next/no-img-element */
import { live } from "@/helpers/content";
import { useEffect, useState } from "react";

export default function Live(): JSX.Element {
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeVideoSource, setActiveVideoSource] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIframeLoaded(false);
  }, [activeVideoSource]);

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

      {!iframeLoaded && (
        <span className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24">
            <path fill="grey" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity="0.25" />
            <path fill="red" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
              <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
            </path>
          </svg>
        </span>
      )}
      <iframe
      className={!iframeLoaded ? 'hidden' : 'block'}
        width={"100%"}
        height={"900px"}
        allowFullScreen
        src={activeVideoSource}
        {...(windowWidth < 768 && { sandbox: "allow-scripts" })}
        allow="autoplay"
        title="iframe"
        onLoad={(e) => {
          setIframeLoaded(true);
        }}
      ></iframe>
    </>
  );
}
