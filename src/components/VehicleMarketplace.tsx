import { useState } from 'react'
import { Search, Globe, User, Car, Truck, Bike, ChevronLeft, ChevronRight } from 'lucide-react'
import * as Select from '@radix-ui/react-select'
import * as Switch from '@radix-ui/react-switch'
import * as Checkbox from '@radix-ui/react-checkbox'

export default function VehicleMarketplace() {
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale')

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-red-600">
            myauto<span className="text-black">.ge</span>
          </a>
          <div className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="pl-8 pr-4 py-2 w-full border rounded-md"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm">
              <Globe className="h-4 w-4 mr-2" />
              English
            </button>
            <button className="flex items-center text-sm">
              <User className="h-4 w-4 mr-2" />
              Log in
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm">
              Sell
            </button>
          </div>
        </div>
        <nav className="container mx-auto px-4 py-2">
          <ul className="flex space-x-6 text-sm">
            {["Customs", "VIN Check", "Dealers", "New Auto Dealerships", "Auction", "Auto Parts", "Catalogue", "Title transfer"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Switch.Root
              checked={listingType === 'sale'}
              onCheckedChange={() => setListingType('sale')}
              className="w-11 h-6 bg-gray-200 rounded-full relative"
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
            </Switch.Root>
            <label className="text-sm font-medium">For sale</label>
            <Switch.Root
              checked={listingType === 'rent'}
              onCheckedChange={() => setListingType('rent')}
              className="w-11 h-6 bg-gray-200 rounded-full relative"
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
            </Switch.Root>
            <label className="text-sm font-medium">For rent</label>
            <div className="flex-1" />
            <button className="px-4 py-2 border rounded-md text-sm">
              Clear Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            {['Manufacturer', 'Model', 'Location', 'Year', 'Price', 'Fuel'].map((filter) => (
              <Select.Root key={filter}>
                <Select.Trigger className="inline-flex items-center justify-between rounded px-4 py-2 text-sm leading-none bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none">
                  <Select.Value placeholder={filter} />
                  <Select.Icon className="ml-2">
                    <ChevronLeft className="h-4 w-4" />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
                  <Select.Viewport className="p-2">
                    <Select.Item value="option1" className="relative flex items-center px-8 py-2 text-sm rounded-md hover:bg-gray-100 focus:bg-gray-100">
                      <Select.ItemText>Option 1</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="option2" className="relative flex items-center px-8 py-2 text-sm rounded-md hover:bg-gray-100 focus:bg-gray-100">
                      <Select.ItemText>Option 2</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="option3" className="relative flex items-center px-8 py-2 text-sm rounded-md hover:bg-gray-100 focus:bg-gray-100">
                      <Select.ItemText>Option 3</Select.ItemText>
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Root>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            {['Customs-cleared', 'Duty Free', 'Listings with VIN', 'Hide Price Negotiable'].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox.Root
                  id={option.toLowerCase().replace(/\s+/g, '-')}
                  className="w-5 h-5 border rounded"
                >
                  <Checkbox.Indicator>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label htmlFor={option.toLowerCase().replace(/\s+/g, '-')} className="text-sm font-medium">
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button className="px-4 py-2 border rounded-md text-sm">Additional filters</button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
              Search (99727)
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="space-y-4">
            {[
              { icon: Car, label: 'Cars' },
              { icon: Truck, label: 'Custom Vehicles' },
              { icon: Bike, label: 'Motorcycles' },
            ].map(({ icon: Icon, label }) => (
              <button key={label} className="flex items-center w-full px-4 py-2 text-left border rounded-md">
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </button>
            ))}
          </aside>

          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Featured Vehicles</h2>
              <div className="flex space-x-2">
                <button className="p-2 border rounded-md">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="p-2 border rounded-md">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                  <img
                    src={`https://source.unsplash.com/random/300x200?car=${index}`}
                    alt={`Vehicle ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold mb-2">2023 Model Car</h3>
                    <p className="text-sm text-gray-600 mb-2">30,000 miles • Automatic • Gasoline</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">$25,999</span>
                      <button className="px-4 py-2 border rounded-md text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-6 text-center">
          © 2023 myauto.ge. All rights reserved.
        </div>
      </footer>
    </div>
  )
}