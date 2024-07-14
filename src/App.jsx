import React, { useState } from 'react';

function App() {

  //states
  const [mainBill, setMainBill] = useState(0);
  const [numOfPpl, setNumOfPpl] = useState(1); //ovde stavljamo koji je default po osobi, stavio sam 1 a moze i 0 da se stavi...
  const [tipPercentage, setTipPercentage] = useState(0);
  //dodajem custom tip state
  const [customTip, setCustomTip] = useState('');

  //pravimo event za input field
  const handleBillChange = (e) => setMainBill(e.target.value);
  const handlePeopleChange = (e) => setNumOfPpl(e.target.value);
  

  //ovo updatuje state "tipPercentage" sa onim buttonom koji smo kliknuli dole
  const handleTipPercentage = (percentage) => {
    setTipPercentage(percentage);
    setCustomTip(''); //clear custom ako smo izabrali procenat koji je ponudjen
  };

  //matematicka logika za racunanje procenta i na dve decimale se prikazuje
  const calculateTipAmount = () => {
    const bill = parseFloat(mainBill);
    const tip = customTip ? parseFloat(customTip) : tipPercentage;
    return (bill * (tip / 100) || 0).toFixed(2);
  };


  //ovde se racuna bill per person i dodaje tip
  const billPerPerson = () => {
    const bill = parseFloat(mainBill);
    const people = parseInt(numOfPpl);

    if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) { //ovde samo pravimo kratku funkciju da se ne prikazuje NaN vec 0.00
      return '0.00';
    }

    const tipAmount = parseFloat(calculateTipAmount()); 
    const totalBill = bill + tipAmount;
    return (totalBill / people).toFixed(2);
  };

  //total bill with tip, sending 2 params which we use down when calling the function
  const totalBillWithTip = (billToPass, calculateTip) => {
    const bill = parseFloat(billToPass);
    const tipAmount = parseFloat(calculateTip);

    if (isNaN(bill) || bill <= 0) {
      return '0.00';
    }

    const total = bill + tipAmount;
    return total.toFixed(2);
  };

  //handler za custom tip amount , uzimam value inputa i regex stavljam da moze samo broj jer je input type text, setujem custom tip i praznim ako smo izabrali vec procenat
  const handleCustomTip = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setCustomTip(value);
      setTipPercentage(0); // Clear preset percentage if custom tip is entered
    }
  }


  // Handle Enter key press and perform a calculation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      totalBillWithTip(mainBill, calculateTipAmount());
      
    }
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
            <input type="text" 
                  className='h-[30px] w-[75px] ml-[5px] pl-[10px] font-mono placeholder-[#01464c] text-md bg-[#f4f7fa] rounded-md' 
                  placeholder='Custom'
                  value={customTip}
                  onChange={handleCustomTip}
                  onKeyDown={handleKeyDown}
                  />
            {/* CUSTOM SREDJEN ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
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
            <h2>${(parseFloat(calculateTipAmount()) / numOfPpl).toFixed(2)}</h2>
          </div>


          <div className='mt-2'>
            <p>Total</p>
            <span>/person</span>
            <h2>${billPerPerson()}</h2>
          </div>


          <div className='mt-20'>
            <h1>Total with tip</h1>
            <p>${totalBillWithTip(mainBill, calculateTipAmount())}</p>
          </div>

        </div>
      </div>
    </div>
  );
}



export default App