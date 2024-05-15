import React from "react";
import goog from "../assets/google.svg";
import save from "../assets/save.svg";
import clock from "../assets/clock.svg";
import bag from "../assets/bag.svg";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const JobCard = ({ score }) => {
  return (
    <span className='border border-slate-400 rounded-md p-2'>
      <div className='flex justify-between'>
        <div>
          <span className='flex gap-2'>
            <img src={goog} />
            <div>
              <h2 className='font-semibold my-1'>UI/UX Designer</h2>
              <span className='flex gap-2 text-xs'>
                <p>Google</p>
                <p>&#x2022;</p>
                <p className='text-orange-400 flex items-center font-semibold text-xs bg-orange-100 px-2 py-1 rounded-xl'>
                  Figma
                </p>
                <p className='text-red-400 flex items-center font-semibold text-xs bg-red-100 px-2 py-1 rounded-xl'>
                  Prototyping
                </p>
                <p className='text-blue-400 flex items-center font-semibold text-xs bg-blue-100 px-2 py-1 rounded-xl'>
                  User Interface
                </p>
              </span>
            </div>
          </span>
        </div>
        <div className='flex gap-3 items-center'>
          <button className='border px-3 h-9 rounded-md text-white font-semibold bg-[#FF9800]'>
            Apply Now
          </button>
          <button className='flex items-center gap-2 border border-slate-500 px-3 h-9 rounded-md font-semibold'>
            <img src={save} />
            Save
          </button>
        </div>
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='flex gap-2 items-center text-sm my-2'>
            <span className='flex gap-2 items-center'>
              <img src={bag} />
              0-3 Years
            </span>
            |
            <span className='flex gap-2 items-center'>
              <img src={clock} />
              Full Time
            </span>
            |
            <span className='flex gap-2 items-center'>
              <p className='text-slate-500'>Posted on:</p>
              02 April 2024
            </span>
          </div>
          <div className='min-w-[70%] max-w-[75%] text-slate-500'>
            <p>
              &#x2022; Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores quaerat totam
            </p>
            <p>
              &#x2022; Lorem ipsum dolor sit amet elit. Dolores quaerat totam
              hic consequuntur
            </p>
          </div>
        </div>
        <div className='max-w-[25%] max-h-40 overflow-clip relative'>
          <CircularProgressbarWithChildren
            styles={buildStyles({
              strokeLinecap: "butt",
              rotation: 3 / 4,
              pathColor: score > 90 ? "#62af00" : "#ffc700",
            })}
            circleRatio={0.5}
            value={score}>
            <div className='flex flex-col items-center absolute top-[35%] left-[50%] -translate-y-2/4 -translate-x-2/4'>
              <h1 className='text-3xl font-semibold'>{score}</h1>
              <p className='text-lg text-slate-500'>Match Score</p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </span>
  );
};

export default JobCard;
