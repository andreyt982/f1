"use client";
/* eslint-disable @next/next/no-img-element */
import { content } from "@/helpers/content";
import { getCurrentGP } from "@/helpers/getCurrentGP";
import { useEffect, useState } from "react";

export default function Calendar(): JSX.Element {
  const [currentGP, setCurrentGP] = useState({ name: "", date: "", circuit: "", thumbnail: "", flag: "" });
  useEffect(() => {
    const gp = getCurrentGP();
    if (gp && typeof gp === "object") {
      setCurrentGP(gp);
    }
  }, []);

  return (
    <div className="calendar grid gap-10 bg-white w-11/12 lg:w-9/12 2xl:w-4/6 min-[2160px]:w-3/6 ">
      {content.grandPrix.map((grandP, index) => {
        const isCurrentGP = currentGP.date === grandP.date;
        const gp = content.grandPrix[index];
        return (
          <div key={index} className={`${isCurrentGP && `md:col-span-2  min-[2100px]:col-span-3 relative my-10`} border relative element rounded-lg `}>
            <h2 className={`${isCurrentGP ? `absolute -top-12 left-0 border-l-8 border-l-red-600 pl-1 uppercase font-extrabold text-sm md:text-xl lg:text-2xl` : `hidden `}`}>
              <span className="text-black ">Next Race: </span>
              <span className="text-gray-600">{new Date(grandP.date + "T00:00:00").toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }) }</span>
            </h2>

            <div
              style={{ backgroundImage: `${isCurrentGP && `url(${currentGP.thumbnail})`}` }}
              className={`${isCurrentGP ? ` calendar-active-gp   p-0 text-white col-end-3 ` : `p-4 text-black`}  flex flex-col gap-6 `}
            >
              <div className={`${isCurrentGP && `blurr`} content relative `}>
                <h2 className={` uppercase font-semibold text-center  ${isCurrentGP ? `text-xl` : `text-md`} `}>{grandP.name}</h2>

                <div className={`${isCurrentGP ? `` : ``} content`}>
                  <div className="info flex justify-between">
                    <div className="data">
                      <p className={`2xl:text-xl ${isCurrentGP ? `hidden` : `relative`}`}>{grandP.date}</p>
                    </div>
                    <img src={grandP.flag} className="flag rounded-sm" alt="flag" />
                  </div>
                  <span className="w-full flex justify-center items-center">
                    <img src={grandP.circuit} className="circuit w-4/12" alt="circuit" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
