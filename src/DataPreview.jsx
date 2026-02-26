import { useLocalStorageState } from './useLocalStorageState';
function DataPreview() {
  const [data, setData] = useLocalStorageState('usageEntries', []);
  console.log(data);
  return (
    <>
      <h1>View Your Data here!</h1>

      <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Time Spent in Minutes</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((usage) => (
            <tr key={usage.id}>
              <td className="px-6 py-3">{usage.name}</td>
              <td className="px-6 py-3">{usage.minutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DataPreview;
