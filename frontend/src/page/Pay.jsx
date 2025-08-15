import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pay = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const navigate = useNavigate();
  const isExpired = timeLeft === 0;

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Scan to Pay
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          {isExpired ? (
            <div>
              <h3 className="text-2xl font-bold text-red-600">Barcode expired</h3>
              <p className="mt-2 text-gray-600">Please go back and try again.</p>
            </div>
          ) : (
            <>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Example"
                alt="QR Code"
                className="mx-auto"
              />
              <p className="mt-4 text-lg font-medium text-gray-900">
                Scan the QR code with your payment app
              </p>
              <div className="mt-4 text-2xl font-bold text-red-600">
                {formatTime(timeLeft)}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                This code will expire in 5 minutes.
              </p>
            </>
          )}
        </div>
        <div className="mt-6">
            <button
                onClick={() => navigate('/payment-confirmation')}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                I have completed my payment
            </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;