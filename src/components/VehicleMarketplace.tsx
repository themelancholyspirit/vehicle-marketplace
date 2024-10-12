import { useState } from 'react'
import { Search, Globe, User, Car, Truck, Bike, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react'
import * as Select from '@radix-ui/react-select'
import * as Switch from '@radix-ui/react-switch'
import * as Checkbox from '@radix-ui/react-checkbox'

export default function VehicleMarketplace() {
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale')
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors">
            myauto<span className="text-black">.ge</span>
          </a>
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 rounded-full focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="flex items-center text-sm hover:text-red-600 transition-colors">
              <Globe className="h-5 w-5 mr-2" />
              English
            </button>
            <button className="flex items-center text-sm hover:text-red-600 transition-colors">
              <User className="h-5 w-5 mr-2" />
              Log in
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
              Sell
            </button>
          </div>
        </div>
        <nav className="container mx-auto px-4 py-3 border-t">
          <ul className="flex space-x-8 text-sm">
            {["Customs", "VIN Check", "Dealers", "New Auto Dealerships", "Auction", "Auto Parts", "Catalogue", "Title transfer"].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <Switch.Root
                checked={listingType === 'sale'}
                onCheckedChange={() => setListingType('sale')}
                className={`w-14 h-7 rounded-full transition-colors ${listingType === 'sale' ? 'bg-red-500' : 'bg-gray-300'}`}
              >
                <Switch.Thumb className={`block w-6 h-6 bg-white rounded-full transition-transform duration-200 ${listingType === 'sale' ? 'translate-x-7' : 'translate-x-1'}`} />
              </Switch.Root>
              <label className="text-sm font-medium">For sale</label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch.Root
                checked={listingType === 'rent'}
                onCheckedChange={() => setListingType('rent')}
                className={`w-14 h-7 rounded-full transition-colors ${listingType === 'rent' ? 'bg-red-500' : 'bg-gray-300'}`}
              >
                <Switch.Thumb className={`block w-6 h-6 bg-white rounded-full transition-transform duration-200 ${listingType === 'rent' ? 'translate-x-7' : 'translate-x-1'}`} />
              </Switch.Root>
              <label className="text-sm font-medium">For rent</label>
            </div>
            <div className="flex-1" />
            <button 
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? <X className="h-4 w-4 inline mr-2" /> : <Filter className="h-4 w-4 inline mr-2" />}
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {showFilters && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                {['Manufacturer', 'Model', 'Location', 'Year', 'Price', 'Fuel'].map((filter) => (
                  <Select.Root key={filter}>
                    <Select.Trigger className="inline-flex items-center justify-between w-full rounded px-4 py-2 text-sm leading-none bg-white border border-gray-300 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors">
                      <Select.Value placeholder={filter} />
                      <Select.Icon className="ml-2">
                        <ChevronLeft className="h-4 w-4" />
                      </Select.Icon>
                    </Select.Trigger>
                    <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg border border-gray-200">
                      <Select.Viewport className="p-2">
                        <Select.Item value="option1" className="relative flex items-center px-8 py-2 text-sm rounded-md hover:bg-red-50 focus:bg-red-50 cursor-pointer">
                          <Select.ItemText>Option 1</Select.ItemText>
                        </Select.Item>
                        <Select.Item value="option2" className="relative flex items-center px-8 py-2 text-sm rounded-md hover:bg-red-50 focus:bg-red-50 cursor-pointer">
                          <Select.ItemText>Option 2</Select.ItemText>
                        </Select.Item>
                        <Select.Item value="option3" className="relative flex items-center px-8 py-2 text-sm rounded-md hover:bg-red-50 focus:bg-red-50 cursor-pointer">
                          <Select.ItemText>Option 3</Select.ItemText>
                        </Select.Item>
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Root>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 mb-6">
                {['Customs-cleared', 'Duty Free', 'Listings with VIN', 'Hide Price Negotiable'].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox.Root
                      id={option.toLowerCase().replace(/\s+/g, '-')}
                      className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      <Checkbox.Indicator>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <label htmlFor={option.toLowerCase().replace(/\s+/g, '-')} className="text-sm font-medium cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-between items-center">
            <button className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              Additional filters
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors">
              Search (99727)
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="space-y-4">
            {[
              { icon: Car, label: 'Cars' },
              { icon: Truck, label: 'Custom Vehicles' },
              { icon: Bike, label: 'Motorcycles' },
            ].map(({ icon: Icon, label }) => (
              <button key={label} className="flex items-center w-full px-4 py-3 text-left border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-500 transition-colors">
                <Icon className="mr-3 h-5 w-5 text-red-500" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </aside>

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
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-400 transition-colors">Company</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Safety Center</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Community Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-red-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p>© 2023 myauto.ge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}