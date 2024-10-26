import { useState } from 'react';
import img from '../Asset/logo.jpg';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [appNumber, setAppNumber] = useState('');
  const [appPin, setAppPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validAppNumber = '4422890';
    const validAppPin = 'dps#2024';

    if (appNumber === validAppNumber && appPin === validAppPin) {
      setAppNumber('');
      setAppPin('');
      window.location.href = 'https://sites.google.com/view/d-predictor/home';
    } else {
      setErrorMessage('Invalid App Number or App PIN');
    }
  };

  return (
    <div className="hero bg-orange-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         
         <img src={img} alt="" className='w-auto h-10 mx-20 mt-6' />
          <form className="card-body" onSubmit={handleSubmit} autoComplete="off">
            <div className="form-control">
              <label className="label">
                
              </label>
              <input
                type="text"
                placeholder="App Number"
                className="input input-bordered bg-red-200 text-black"
                value={appNumber}
                onChange={(e) => setAppNumber(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="form-control">
              <label className="label">
                
              </label>
              <input
              
                type="password"
                placeholder="App PIN"
                className="input input-bordered bg-red-200 text-black"
                value={appPin}
                onChange={(e) => setAppPin(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
            )}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-error text-white">
                Login
              </button>
              <a
                href="//t.me/dpredictor22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-center"
              >
                <small>Request APP NUMBER</small>
              </a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
