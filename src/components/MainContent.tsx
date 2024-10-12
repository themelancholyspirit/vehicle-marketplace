import SearchFilters from './SearchFilters'
import VehicleCategories from './VehicleCategories'
import FeaturedVehicles from './FeaturedVehicles'

export default function MainContent({ listingType, setListingType, showFilters, setShowFilters }: { listingType: string, setListingType: (type: string) => void, showFilters: boolean, setShowFilters: (show: boolean) => void }) {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <SearchFilters
        listingType={listingType}
        setListingType={setListingType}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <VehicleCategories />
        <FeaturedVehicles />
      </div>
    </main>
  )
}