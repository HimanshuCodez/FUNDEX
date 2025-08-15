import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const PaymentConfirmation = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error('Please upload a screenshot');
      return;
    }

    const formData = new FormData();
    formData.append('screenshot', file);
    formData.append('amount', localStorage.getItem('Amount'));

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': localStorage.getItem('token'),
        },
      };
      await axios.post('/api/payment', formData, config);
      toast.success('Payment screenshot uploaded successfully');
      navigate('/account'); // or a payment status page
    } catch (err) {
      toast.error('Something went wrong');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Upload Payment Screenshot
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="screenshot"
                className="block text-sm font-medium text-gray-700"
              >
                Screenshot
              </label>
              <div className="mt-1">
                <input
                  id="screenshot"
                  name="screenshot"
                  type="file"
                  required
                  onChange={onFileChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;