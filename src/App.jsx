import React from 'react';
export default function App() {
  return (
      <div
      className="flex flex-col mx-auto rounded-lg w-[700px] h-[350px] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row">
     
      <div className="flex flex-col w-[300px] justify-start p-6">
        <h5
          className="mb-2 text-md font-mono text-neutral-800 dark:text-neutral-50">
          Bill
        </h5>

        <input type="number" />


        
        <p className="text-mb font-mono text-neutral-500 dark:text-neutral-300">
          Select Tip %
        </p>

        <p className="text-mb font-mono text-neutral-500 dark:text-neutral-300">
          Number of People
        </p>
      </div>
      <div
        className="h-[300px] w-[300px] mt-[24px] ml-[70px] bg-[#01464c] rounded-lg "
      ></div>
    </div>
  );
}
