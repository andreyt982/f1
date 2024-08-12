/* eslint-disable @next/next/no-img-element */
import { content } from "@/helpers/content";

export default function Calendar(): JSX.Element {
  return (
    <div className="calendar grid gap-10 bg-white w-11/12 lg:w-10/12 2xl:w-2/3">
      {content.grandPrix.map((gp, index) => {
        return (
          <div className="element flex flex-col p-4 gap-6 rounded-lg" key={index}>
            <h2 className="uppercase font-semibold text-center text-black">{content.grandPrix[index].name}</h2>

            <div className="content">
              <div className="info flex justify-between">
                <div className="data text-sm text-gray-600">
                  <p>{content.grandPrix[index].date}</p>
                </div>
                <img src={content.grandPrix[index].flag} className="flag w-1/5" alt="flag" />
              </div>
              <span className="w-full flex justify-center items-center">
                <img src={content.grandPrix[index].circuit} className="circuit w-4/12" alt="circuit" />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
