/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
export function Hero(): JSX.Element {
  return (
    <div className="hero w-full h-screen flex items-center justify-center flex-col gap-10">
      <div className="overlay"></div>

      <section className="z-20">
        <div className="py-2 px-2 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-nonemd:text-5xl lg:text-6xl text-white">Your Ultimate Formula 1 Destination</h1>
          <p className="mb-8 text-md font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Enjoy live streams, Grand Prix calendar, review the latest standings, and access full race replays.</p>
          <div className="flex space-y-4  justify-center sm:space-y-0">
            <Link href="/live" className="text-base hover:scale-105 font-medium options flex items-center justify-center w-auto gap-1 z-10 bg-red-600 pr-4 pl-2 py-2 rounded-lg xl:text-2xl">
              <div className="flex justify-center items-center">
                <div className="h-7  w-7 md:h-10 md:w-10 bg-red-100 rounded-full flex justify-center items-center animation-pulse"></div>
              </div>
              <div className="a">
                <button className="">Watch F1 Live</button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
