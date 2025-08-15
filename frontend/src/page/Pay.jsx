import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pay = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      navigate('/payment-confirmation');
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

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
        </div>
      </div>
    </div>
  );
};

export default Pay;