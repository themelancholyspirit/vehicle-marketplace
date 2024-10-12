import { Filter, X } from 'lucide-react'
import * as Switch from '@radix-ui/react-switch'
import * as Select from '@radix-ui/react-select'
import * as Checkbox from '@radix-ui/react-checkbox'

export default function SearchFilters({ listingType, setListingType, showFilters, setShowFilters }: { listingType: string, setListingType: (type: string) => void, showFilters: boolean, setShowFilters: (show: boolean) => void }) {
  return (
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
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
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
  )
}