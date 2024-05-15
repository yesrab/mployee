import React from "react";
import { NavLink } from "react-router-dom";

const SideBarLinks = ({ to, name, image }) => {
  return (
    <NavLink to={to} className='flex w-full min-h-8 relative justify-center'>
      {({ isActive }) => {
        return (
          <>
            {isActive ? (
              <div className='bg-orange-300 w-2 rounded-tr-md rounded-br-md absolute left-0 top-0 bottom-0'></div>
            ) : null}
            <span className='flex gap-3 items-center flex-grow ml-5'>
              <img src={image} />
              <p className='text-sm'>{name}</p>
            </span>
          </>
        );
      }}
    </NavLink>
  );
};

export default SideBarLinks;
