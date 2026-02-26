import { useNavigate } from 'react-router-dom';
import { useLocalStorageState } from '../useLocalStorageState';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();

  const [selectedApps, setSelectedApps] = useLocalStorageState(
    'selectedApp',
    []
  );

  useEffect(function () {
    if (selectedApps.length > 0) {
      navigate('/daily-logger', { replace: true });
    } else {
      navigate('/welcome');
    }
  }, []);

  function handleNextFeature() {
    navigate('/welcome');
  }
  return (
    <div className="h-screen w-screen ">
      <div
        className="h-full w-full bg-orange-100 flex items-center 
      flex-col justify-center"
      >
        <h1 className="text-2xl md:text-6xl text-grey-700 mb-10 text-center">
          Welcome To Your Tracking buddy
        </h1>
        <button
          onClick={handleNextFeature}
          className="bg-orange-500  md:text-4xl font-bold
          p-2 md:p-6 md:w-1/4 rounded-lg text-sky-50 text-xl"
        >
          Start Tracking
        </button>
      </div>
    </div>
  );
}

export default Home;
