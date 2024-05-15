import React from "react";
import { Link } from "react-router-dom";

const HeaderLinks = ({ name, isNew }) => {
  return (
    <Link className='flex items-center gap-2'>
      {name}
      {isNew ? (
        <span className='text-orange-400 font-semibold text-xs bg-orange-100 px-2 rounded-xl'>
          New Launch
        </span>
      ) : null}
    </Link>
  );
};

export default HeaderLinks;
