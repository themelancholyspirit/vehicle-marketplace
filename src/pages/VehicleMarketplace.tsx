import { useState } from 'react'
import MainContent from '../components/MainContent'
import VehicleSearchCards from '../components/VehicleSearchCards'

export default function VehicleMarketplace() {
  const [listingType, setListingType] = useState('sale')
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <MainContent
        listingType={listingType}
        setListingType={setListingType}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      <div className="container mx-auto px-4">
        <VehicleSearchCards />
      </div>
    </div>
  )
}
