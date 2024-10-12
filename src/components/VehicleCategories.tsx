import { Car, Truck, Bike } from 'lucide-react'

export default function VehicleCategories() {
  const categories = [
    { icon: Car, label: 'Cars' },
    { icon: Truck, label: 'Custom Vehicles' },
    { icon: Bike, label: 'Motorcycles' },
  ]

  return (
    <aside className="space-y-4">
      {categories.map(({ icon: Icon, label }) => (
        <button key={label} className="flex items-center w-full px-4 py-3 text-left border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-500 transition-colors">
          <Icon className="mr-3 h-5 w-5 text-red-500" />
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </aside>
  )
}