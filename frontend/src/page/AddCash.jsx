
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { IndianRupee } from 'lucide-react';

export function AddCash() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');

  const handleNext = () => {
    const parsedAmount = parseInt(amount);
    if (!parsedAmount || parsedAmount <10 || parsedAmount > 1000000) {
      alert('Please enter an amount between ₹50 and ₹1000000');
      return;
    }
    window.localStorage.setItem('Amount', parsedAmount);
    navigate('/Pay');
  };

  return (
    <div className="font-roboto">
  
      <div className="py-5 px-4 ">
    
        <div className="mt-4 text-white">Choose Amount to Add</div>
        <div className="mt-3">
          <div className="text-white text-[14px] mb-1">Enter Amount</div>
          <div className="flex">
            <IndianRupee className="w-12" alt="Rupee" />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full h-[40px] bg-white rounded-sm px-2 mt-1"
              placeholder="Enter Amount"
            />
          </div>
          <div className="text-white  text-[14px] mt-2">Min: 50, Max: 10000</div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button
            className="text-black bg-white hover:bg-amber-300 rounded-sm pt-6 pr-18 pl-3 w-full"
            style={{ fontSize: '34px' }}
            onClick={() => setAmount('50')}
          >
            ₹50
          </button>
          <button
            className="bg-white text-black hover:bg-amber-300 rounded-sm pt-6 pr-18 pl-3 w-full"
            style={{ fontSize: '34px' }}
            onClick={() => setAmount('500')}
          >
            ₹500
          </button>
          <button
            className="bg-white text-black hover:bg-amber-300 rounded-sm pt-6 pr-18 pl-3 w-full"
            style={{ fontSize: '34px' }}
            onClick={() => setAmount('1000')}
          >
            ₹1000
          </button>
          <button
            className="bg-white text-black hover:bg-amber-300 rounded-sm pt-6 pr-18 pl-3 w-full"
            style={{ fontSize: '34px' }}
            onClick={() => setAmount('5000')}
          >
            ₹5000
          </button>
          <button
            className="bg-white text-black hover:bg-amber-300 rounded-sm pt-6 pr-18 pl-3 w-full"
            style={{ fontSize: '34px' }}
            onClick={() => setAmount('10000')}
          >
             ₹10000
          </button>
          <button
            className="bg-white text-black hover:bg-amber-300 rounded-sm pt-6 pr-18 pl-3 w-full"
            style={{ fontSize: '34px' }}
            onClick={() => setAmount('25000')}
          >
           ₹25000 
          </button>
        </div>
        <div className="px-2 mt-4">
          <button
            onClick={handleNext}
            className="bg-yellow-300 text-black rounded-sm w-full p-3 mt-4 text-[14px]"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}