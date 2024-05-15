import React from "react";
import { Link, NavLink } from "react-router-dom";
import SideBarLinks from "./SideBarLinks";
import grid from "../assets/grid.svg";
import history from "../assets/history.svg";
import doller from "../assets/doller.svg";
import people from "../assets/people.svg";
import settings from "../assets/Settings.svg";
import help from "../assets/help.svg";
import stars from "../assets/stars.svg";
import dropDown from "../assets/dropdown.svg";
import SideBarDropDown from "./SideBarDropDown";
const SideBar = () => {
  return (
    <div className='border-2 border-t-0 border-slate-100 w-[20vw] py-3 flex flex-col justify-between'>
      <nav className='flex flex-col gap-3'>
        <SideBarLinks to='/' image={grid} name={"Job Recommendation Tool"} />
        <SideBarLinks to='/history' image={history} name={"History"} />
        <div className='flex w-full min-h-8 items-center justify-center'>
          <SideBarDropDown />
        </div>
        <SideBarLinks
          to='/plans'
          image={doller}
          name={"Plans (Current: Free)"}
        />
        <SideBarLinks to='/profiles' image={people} name={"Manage Profiles"} />
      </nav>
      <div className='flex flex-col gap-3 p-3'>
        <p className='text-sm text-slate-600'>Help & Support</p>
        <Link className='font-semibold flex items-center gap-2'>
          <img src={settings} alt='settings' />
          Settings
        </Link>
        <Link className='font-semibold flex items-center gap-2'>
          <img src={help} alt='Help and support' />
          Help Center
        </Link>
        <span className='border-2 py-2 px-4 rounded-lg font-semibold'>
          Current Plan: Free
        </span>
        <div className='flex gap-2 border-2 border-orange-400 p-4 rounded-xl bg-orange-50'>
          <img src={stars} className='bg-orange-400 p-3 rounded-full' />
          <span>
            <p className='font-semibold'>Upgrade to Pro</p>
            <p className='text-slate-500'>Get all features</p>
          </span>
          <img src={dropDown} className='ml-auto -rotate-90' />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
