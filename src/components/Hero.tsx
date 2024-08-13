/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCurrentGP } from "../helpers/getCurrentGP";
export function Hero(): JSX.Element {
  const [currentGP, setCurrentGP] = useState({ name: "", date: "", circuit: "", thumbnail: "", flag: "" });
  useEffect(() => {
    const gp = getCurrentGP();
    if (gp && typeof gp === "object") {
      setCurrentGP(gp);
    }
  }, []);

  return (
    <div className="hero w-full h-screen flex items-center justify-center flex-col md:text-3xl gap-6">
      <div className="overlay"></div>

      <Link href="/live" className=" options flex items-center justify-center w-auto gap-1 z-10 bg-red-600 pr-4 pl-2 py-2 rounded-lg ">
        <div className="flex justify-center items-center">
          <div className="h-7  w-7 md:h-10 md:w-10 bg-red-100 rounded-full flex justify-center items-center animation-pulse"></div>
        </div>
        <div className="a">
          <button className="">Watch F1 Live!</button>
        </div>
      </Link>

      <div className="races-cards flex gap-4 z-20 absolute bottom-20">
        {currentGP && (
          <div className="element flex flex-col p-4 gap-6 rounded-lg  border-l-4 border-l-red-600">
            <h2 className="uppercase font-semibold">NEXT RACE</h2>

            <div className="content">
              <div className="info flex justify-between">
                <div className="data text-sm text-gray-400">
                  <h3>{currentGP.name}</h3>
                  <p>{currentGP.date}</p>
                </div>
                <img src={currentGP.flag} className="flag" alt="flag" />
              </div>
              <span className="w-full flex justify-center items-center">
                <img src={currentGP.circuit} className="circuit" alt="circuit" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
