import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandTiktok,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorageState } from '../useLocalStorageState';

function SelectApp() {
  const navigate = useNavigate();

  const [apps, setApps] = useState([
    { id: 1, name: 'Instagram', icon: IconBrandInstagram, selected: false },
    { id: 2, name: 'X(twitter)', icon: IconBrandX, selected: false },
    { id: 3, name: 'Facebook', icon: IconBrandFacebook, selected: false },
    { id: 4, name: 'Youtube', icon: IconBrandYoutube, selected: false },
    { id: 5, name: 'Tiktok', icon: IconBrandTiktok, selected: false },
    { id: 6, name: 'Whatsapp', icon: IconBrandWhatsapp, selected: false },
  ]);

  function handleAppClick(appId) {
    setApps(
      apps.map((app) =>
        app.id === appId ? { ...app, selected: !app.selected } : app
      )
    );
  }

  const [selectedApps, setSelectedApps] = useLocalStorageState(
    'selectedApp',
    []
  );

  // useEffect(function () {
  //   if (selectedApps.length > 0) {
  //     navigate('/daily-logger', { replace: true });
  //   }
  // }, []);
  function handleContinue() {
    const selected = apps.filter((app) => app.selected);

    setSelectedApps(selected);

    // localStorage.setItem('selectedApps', JSON.stringify(selected));

    // //navigate to daily logger page
    navigate('/daily-logger');
  }

  return (
    <div className="w-screen h-screen bg-pink-200 ">
      <h1 className="text-center pt-6 mb-10 text-3xl font-medium text-purple-900">
        Select Apps to Track
      </h1>
      <div className=" w-full h-full ">
        <div className="grid justify-items-center w-1/2 mx-auto">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                onClick={() => handleAppClick(app.id)}
                className="mt-4 mx-auto"
              >
                <Icon size={54} />
                <p>{app.name}</p>
                {app.selected && <span className="w-1/2">✔</span>}
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <button
            disabled={apps.filter((app) => app.selected).length === 0}
            onClick={handleContinue}
            className=" w-40 text-sky-50
          bg-pink-700 p-2 rounded-lg hover:bg-pink-500 text-center "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectApp;
