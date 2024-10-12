import { ChevronLeft, ChevronRight } from 'lucide-react'
import VehicleCard from './VehicleCard'

export default function FeaturedVehicles() {
  return (
    <div className="md:col-span-3">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Vehicles</h2>
        <div className="flex space-x-2">
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <VehicleCard key={index} index={index} />
        ))}
      </div>
    </div>
  )
}