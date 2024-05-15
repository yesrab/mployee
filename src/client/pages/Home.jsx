import React from "react";
import goog from "../assets/google.svg";
import JobCard from "../components/JobCard";
const Home = () => {
  return (
    <main className='bg-slate-100 flex-grow p-5'>
      <div className='border border-slate-400 rounded-md p-3 bg-white'>
        <h2 className='font-semibold my-2'>Jobs (44)</h2>
        <div className='flex flex-col gap-4'>
          <JobCard score={92} />
          <JobCard score={82} />
        </div>
      </div>
    </main>
  );
};

export default Home;
