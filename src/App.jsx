import React, { useState, useEffect } from 'react';

function App() {
  const [mainBill, setMainBill] = useState('');
  const [numOfPpl, setNumOfPpl] = useState(0);
  const [tipCalc, setTipCalc] = useState(0);
  

  const handleBillChange = (e) => setMainBill(e.target.value);
  const handlePeopleChange = (e) => setNumOfPpl(e.target.value);
  const billPerPerson = (mainBill, numOfPpl) => { return mainBill/numOfPpl}




  return (
      <div
      className="flex flex-col font-andale-mono font-black mx-auto rounded-lg w-[700px] h-[350px] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row">
     
      <div className="flex flex-col w-[300px] justify-start p-6">
        <h5
          className="mb-2 text-sm text-neutral-800 dark:text-neutral-50">
          Bill
        </h5>
        <input type="number" className='text-sm bg-[#f4f7fa] placeholder-[#B9CBCC]' onChange={handleBillChange} placeholder='0'/>

        <div className='pb-2'>
        <h5 className="text-sm text-neutral-800 mb-2 dark:text-neutral-300">
          Select Tip %
        </h5>

        <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white'>5%</button>
        <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white'>10%</button>
        <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white'>15%</button>
        <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white'>25%</button>
        <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white'>50%</button>
        <input type="text" className='h-[30px] w-[75px] ml-[5px] pl-[10px] font-mono placeholder-[#01464c] text-md bg-[#f4f7fa] rounded-md' placeholder='Custom'/>
        </div>

        <h5 className="text-sm text-neutral-800 dark:text-neutral-300">
          Number of People
        </h5>

        <input type="text" className=' text-sm placeholder-[#B9CBCC] bg-[#f4f7fa]' onChange={handlePeopleChange} placeholder='0'/>

      </div>
      <div
        className="h-[300px] w-[300px] mt-[24px] ml-[70px] bg-[#01464c] text-white rounded-lg "
      >
        <p>Tip Amount</p>
        <span>/person</span>
        <h2>$0.00</h2>

        <p>Total</p>
        <span>/person</span>
        <h2>${billPerPerson(mainBill,numOfPpl)}</h2>

        <h1>Total</h1>
        <p>${parseFloat(mainBill).toFixed(2)}</p>
      </div>
    </div>
  );
}



export default App