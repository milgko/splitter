import React, { useState } from 'react';

function App() {

  //states
  const [mainBill, setMainBill] = useState(0);
  const [numOfPpl, setNumOfPpl] = useState(1); //ovde stavljamo koji je default po osobi, stavio sam 1 a moze i 0 da se stavi...
  const [tipPercentage, setTipPercentage] = useState(0);

  //pravimo event za input field
  const handleBillChange = (e) => setMainBill(e.target.value);
  const handlePeopleChange = (e) => setNumOfPpl(e.target.value);

  //ovo updatuje state "tipPercentage" sa onim buttonom koji smo kliknuli dole
  const handleTipPercentage = (percentage) => {
    setTipPercentage(percentage);
  };

  //matematicka logika za racunanje procenta i na dve decimale se prikazuje
  const calculateTipAmount = () => {
    return (mainBill * (tipPercentage / 100)).toFixed(2);
  };

  //ovde se racuna bill per person i dodaje tip
  const billPerPerson = () => {
    const bill = parseFloat(mainBill);
    const people = parseInt(numOfPpl);

    if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) { //ovde samo pravimo kratku funkciju da se ne prikazuje NaN vec 0.00
      return '0.00';
    }

    const tipAmount = calculateTipAmount(); 
    const totalBill = bill + parseFloat(tipAmount);
    return (totalBill / people).toFixed(2);
  };

  const totalBillWithTip = () => {
    const bill = parseFloat(mainBill);
    const tipAmount = parseFloat(calculateTipAmount());

    if (isNaN(bill) || bill <= 0) {
      return '0.00';
    }

    const total = bill + tipAmount;
    return total.toFixed(2);
  };



  return (

    <div className='flex items-center justify-center h-screen'>

      <div
        className="flex flex-col font-andale-mono font-black mx-auto rounded-lg w-[700px] h-[350px] bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row">

        <div className="flex flex-col w-[300px] justify-start p-6">
          <h5
            className="mb-2 text-sm text-neutral-800 dark:text-neutral-50">
            Bill Ammount
          </h5>
          <input type="number" className='text-sm bg-[#f4f7fa] placeholder-[#B9CBCC]' onChange={handleBillChange} placeholder='0' />

          <div className='pb-2 mt-8'>
            <h5 className="text-sm text-neutral-800 mb-2 dark:text-neutral-300">
              Select Tip %
            </h5>

            <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white' onClick={() => handleTipPercentage(5)}>5%</button>
            <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white' onClick={() => handleTipPercentage(10)}>10%</button>
            <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white' onClick={() => handleTipPercentage(15)}>15%</button>
            <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white' onClick={() => handleTipPercentage(25)}>25%</button>
            <button className=' bg-[#01464c] h-[30px] w-[75px] rounded-md mx-1 my-1 text-white' onClick={() => handleTipPercentage(50)}>50%</button>
            <input type="text" className='h-[30px] w-[75px] ml-[5px] pl-[10px] font-mono placeholder-[#01464c] text-md bg-[#f4f7fa] rounded-md' placeholder='Custom' />
            {/* OVAJ CUSTOM INPUT NIJE SREDJEN ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
          </div>

          <div className='mt-6'>
            <h5 className="text-sm text-neutral-800 dark:text-neutral-300">
              Number of People
            </h5>

            <input type="number" className='text-sm placeholder-[#B9CBCC] bg-[#f4f7fa]' onChange={handlePeopleChange} placeholder='1' />

          </div>

        </div>
        <div
          className="h-[300px] w-[300px] mt-[24px] ml-[70px] bg-[#01464c] text-white rounded-lg "
        >

          <div className='mt-2'>
            <p>Tip Amount</p>
            <span>/person</span>
            <h2>${calculateTipAmount()}</h2>
          </div>


          <div className='mt-2'>
            <p>Total</p>
            <span>/person</span>
            <h2>${billPerPerson()}</h2>
          </div>


          <div className='mt-20'>
            <h1>Total with tip</h1>
            <p>${totalBillWithTip()}</p>
          </div>

        </div>
      </div>
    </div>
  );
}



export default App