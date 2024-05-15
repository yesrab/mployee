import React from "react";
import drop from "../assets/drop.svg";
const SideBarDropDown = () => {
  return (
    <details className='w-[90%] duration-300 '>
      <summary className='flex justify-between bg-slate-900 rounded-md p-2 text-white items-center gap-3 flex-grow'>
        <span className='flex gap-2'>
          <img src={drop} />
          <p>Saved Jobs</p>
        </span>
      </summary>
      <ul className='list-disc flex flex-col gap-2 p-2'>
        <li className='border-2 rounded-md px-2'>UI/UX Designer</li>
        <li className='border-2 rounded-md px-2'>Web Developer</li>
        <li className='border-2 rounded-md px-2'>Analyst</li>
        <li className='border-2 rounded-md px-2'>Lorem Ipsum</li>
      </ul>
    </details>
  );
};

export default SideBarDropDown;
