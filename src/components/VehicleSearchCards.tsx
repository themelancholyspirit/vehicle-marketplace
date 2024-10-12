import { Search } from 'lucide-react';

export default function VehicleSearchCards() {
  return (
    <div className="flex flex-col md:flex-row gap-6 my-8">
      {/* VIN Search Card */}
      <div className="flex-1 bg-gray-900 text-white rounded-lg p-6">
        <div className="bg-red-600 text-white text-sm font-bold py-1 px-3 rounded-t-lg inline-block -mt-9 mb-4">
          Special price for CARFAX reports!
        </div>
        <h2 className="text-xl font-bold mb-2">Search by VIN</h2>
        <p className="text-gray-400 text-sm mb-4">
          Through this service, you will get detailed information about the vehicle
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter VIN"
            className="flex-grow bg-gray-800 text-white rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button className="bg-white text-gray-900 rounded-r-lg px-4 py-2 font-bold">
            Search
          </button>
        </div>
      </div>

      {/* Tech Inspection Card */}
      <div className="flex-1 bg-[#e6e1d6] rounded-lg p-6 relative overflow-hidden">
        <h2 className="text-xl font-bold mb-2">Check tech. inspection</h2>
        <p className="text-gray-600 text-sm mb-4">
          Through this service, you will know when you have to pass tech. inspection
        </p>
        <div className="flex">
          <input
            type="text"
            placeholder="Car Plate Number"
            className="flex-grow bg-white rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button className="bg-gray-900 text-white rounded-r-lg px-4 py-2 font-bold flex items-center">
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}