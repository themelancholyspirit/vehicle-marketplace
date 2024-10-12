export default function VehicleCard({ index }: { index: number }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={`https://source.unsplash.com/random/400x300?car=${index}`}
        alt={`Vehicle ${index + 1}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">2023 Model Car</h3>
        <p className="text-sm text-gray-600 mb-3">30,000 miles • Automatic • Gasoline</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl text-red-600">$25,999</span>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-semibold hover:bg-red-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}