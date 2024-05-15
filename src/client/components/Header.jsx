import React from "react";
import brand from "../assets/brand.svg";
import HeaderLinks from "./HeaderLinks";
import Profile from "./Profile";
const Header = () => {
  return (
    <header className='max-h-[10vh] border-2 border-slate-200 py-3 px-5  flex items-center justify-between'>
      <img src={brand} alt='mployee' />
      <nav className='flex gap-6'>
        <HeaderLinks name={"Resume Scan"} isNew={true} />
        <HeaderLinks name={"Resume Keywords"} isNew={false} />
        <HeaderLinks name={"Resume Services"} isNew={false} />
        <HeaderLinks name={"Career Blogs"} isNew={false} />
        <HeaderLinks name={"About Us"} isNew={false} />
        <Profile />
      </nav>
    </header>
  );
};

export default Header;
