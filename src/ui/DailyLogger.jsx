import { useState } from 'react';
import { useLocalStorageState } from '../useLocalStorageState';
import { useNavigate } from 'react-router-dom';
function DailyLogger() {
  const navigate = useNavigate();

  const [selectedApps, SetselectedApps] = useLocalStorageState(
    'selectedApp',
    []
  );

  const [dailyEntries, setDailyEntries] = useState(
    selectedApps.map((app) => ({
      appId: Number(app.id),
      name: app.name,
      inputValue: '',
      minutes: 0,
    }))
  );

  const [savedEntries, setSavedEntries] = useLocalStorageState(
    'dailyEntries',
    {}
  );

  const date = new Date().toUTCString();

  const today = new Date().toISOString().split('T')[0];
  const hasEnteredToday = savedEntries[today] !== undefined;

  if (selectedApps.length === 0) {
    return (
      <div className="bg-red-600">
        <p>No apps selected. Please go back and select apps.</p>
      </div>
    );
  }

  function convertToMinutes(input) {
    const parts = input.toLowerCase().split(' ');

    let hours = 0;
    let minutes = 0;

    parts.forEach((part) => {
      if (part.includes('h')) {
        hours = parseInt(part);
      }
      if (part.includes('m')) {
        minutes = parseInt(part);
      }
    });
    return hours * 60 + minutes;
  }
  function handleTimeChange(appId, input) {
    const mins = convertToMinutes(input);

    setDailyEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.appId === appId
          ? { ...entry, minutes: mins, inputValue: input }
          : entry
      )
    );
  }

  function handleSumbit() {
    if (hasEnteredToday) {
      alert('You already logged your usage for today. Come back tomorrow!');
      return;
    }

    const today = new Date().toISOString().split('T')[0];

    setSavedEntries((prev) => ({
      ...prev,
      [today]: dailyEntries,
    }));
    //Reset Form

    setDailyEntries(
      selectedApps.map((app) => ({
        appId: Number(app.id),
        name: app.name,
        minutes: 0,
      }))
    );

    alert('Entry save for ' + today);

    // navigate('/data-preview');
  }

  return (
    <div className="w-screen h-screen">
      <div className="bg-pink-300 w-full h-full p-10 border-5">
        <p>{date}</p>

        {hasEnteredToday && (
          <div className="bg-red-700 text-white p-4 mb-4 rounded">
            ✅ You've already logged your usage for today. Come back tomorrow!
          </div>
        )}

        {selectedApps.map((app) => {
          const entry = dailyEntries.find((e) => e.appId === Number(app.id));

          return (
            <div className="mt-4" key={app.id}>
              <label className="p-4">{app.name}:</label>
              <input
                type="text"
                className="bg-pink-50 m-2 w-20"
                value={entry?.inputValue || ''}
                onChange={(e) =>
                  handleTimeChange(Number(app.id), e.target.value)
                }
                disabled={hasEnteredToday}
              />
            </div>
          );
        })}

        {/* </form> */}
        <button
          className="bg-pink-900 text-sky-50 py-3 px-2 mt-5 text-sm rounded-lg"
          onClick={handleSumbit}
          disabled={hasEnteredToday}
        >
          Submit Daily Entry
        </button>
      </div>
    </div>
  );
}

export default DailyLogger;

///✔make it posssible for the app to be dynamic , so that if the user chooses many apps it will create a form with all those apps
//✔users would want to write their input as !hr 30 mins, find  a way to convert it to a number so it willl be easy to compute at the end of the day
//✔ after filling the form, the user clicks on the daily entry button which adds it to the "database"
//i should be able to view the database for every day entry
// then add chart to visualize how many hours the user spends on each app weekly and monthly
//average time spent daily
//advance: if the user doesn't exceed the set time for all apps,send a congratulatory message > set time or warning mesage if it's +1
//" ... list the apps in order of the most addicted to the least addicted
