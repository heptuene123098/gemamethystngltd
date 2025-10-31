import { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Basic email validation
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setMessage('');
    setIsError(false);

    try {
      // POST to relative endpoint; Vite dev server proxies /api to the local API server
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Subscription failed');
      }

      setMessage(data.message);
      setIsError(false);
      setEmail(''); // Clear input on success
    } catch (error) {
      setMessage(error.message);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute overlay overflow-hidden rounded-lg h-[35vh] w-[70%] bottom-[-6rem] left-[50%] flex flex-col  justify-center items-center translate-x-[-50%]  laptop:w-[80%] laptop:h-[30vh] tablet:w-[85%] phoneL:w-[90%] phoneL:h-[25vh] phoneL:bottom-[-3rem] phoneP:h-[20vh]">
      <div className=" inset-0 bg-[#662d91]/50 absolute -z-20  backdrop-blur-[10px]"></div>

            {/* Success Message Overlay */}
      {message && !isError && (
        <div className="absolute inset-0 bg-green-500/90 backdrop-blur-[5px] flex items-center justify-center rounded-lg z-10">
          <div className="text-center text-white p-4">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="text-xl font-bold mb-2">Welcome Aboard!</h3>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      )}

      <div className="new_content flex items-center flex-col relative z-0">
        <h1 className="text-[32px] text-white leading-[48px] font-semibold uppercase laptop:text-[30px] laptop:leading-[40px] tablet:text-[25px] tablet:leading-[30px] phoneL:text-[17px] phoneL:leading-[20px] phoneP:text-[15px] phoneP:leading-[20px]">
          join us newslettter{" "}
        </h1>
        <p className="text-[16px] text-white font-normal leading-[24px] laptop:text-[14px] laptop:leading-[20px] text-center tablet:text-[13px] tablet:leading-[18px] phoneL:text-[10px] phoneL:leading-[14px] phoneP:text-[9px]">
          Sign Up to our Newsletter and get our latest news update
        </p>
        <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="input_feild mt-4 flex w-[100%] rounded-lg overflow-hidden laptop:w-[90%] laptop:mt-3 tablet:mt-2 phoneL:rounded-md phoneL:mt-3 mx-auto">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            disabled={isLoading}
            className=" p-2 w-[70%] laptop:p-1 laptop:placeholder:text-[13px] laptop:placeholder:pl-2 tablet:p-[.2rem] phoneL:p-[.03rem]  phoneL:placeholder:text-[11px] phoneP:p-[.05rem] phoneP:placeholder:text-[10px] focus:outline-none focus:ring-2 focus:ring-purple-300"
            required
          />
          <button
              type="submit"
              disabled={isLoading}
              className="text-[16px] leading-[29px] px-3 py-2 font-normal text-white bg-[#662d91] laptop:text-[14px] laptop:leading-[20px] laptop:px-2 laptop:py- tablet:text-[13px] tablet:leading-[18px] tablet:px-2 tablet:py-[.2rem] phoneL:text-[11px] phoneL:leading-[14px] phoneL:px-1 phoneL:py-[.1rem] phoneP:text-[10px] phoneP:leading-[14px] phoneP:px-1 phoneP:py-[.03rem]  hover:bg-[#5a267d] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]">
                {isLoading ? (
                  <>
                  <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
            'Subscribe'
              )}
          </button>
        </div>
        </form>
               {/* Error Message */}
        {message && isError && (
          <div className="mt-3 p-2 bg-red-100 text-red-700 text-xs rounded text-center max-w-[80%]">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Newsletter;
