import React from "react";
import profile from "../assets/profle.jpg";
import dropdown from "../assets/dropdown.svg";
const Profile = () => {
  return (
    <span className='bg-slate-100 rounded-full p-2 flex items-center gap-3'>
      <img className='border-2  rounded-full' src={profile} alt='profile pic' />
      Divyanshu
      <img src={dropdown} className='pr-2' />
    </span>
  );
};

export default Profile;
