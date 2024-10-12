import { Search, Globe, User, Bell, Menu, ChevronDown, Heart } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors">
            myauto<span className="text-black">.ge</span>
          </a>
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
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
            <button className="hidden md:flex items-center text-sm hover:text-red-600 transition-colors">
              <Globe className="h-5 w-5 mr-2" />
              English
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <button className="hidden md:flex items-center text-sm hover:text-red-600 transition-colors">
              <User className="h-5 w-5 mr-2" />
              Log in
            </button>
            <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
              Sell
            </button>
            <button className="md:hidden text-gray-600 hover:text-red-600 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
            <button className="relative text-gray-600 hover:text-red-600 transition-colors">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
            </button>
            <button className="hidden md:block relative text-gray-600 hover:text-red-600 transition-colors">
              <Heart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
            </button>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="pl-10 pr-4 py-2 w-full border-2 border-gray-200 rounded-full focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>
      </div>
      <nav className="bg-gray-100">
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-wrap justify-between text-sm">
            {["Customs", "VIN Check", "Dealers", "New Auto Dealerships", "Auction", "Auto Parts", "Catalogue", "Title transfer"].map((item) => (
              <li key={item} className="mb-2 md:mb-0">
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}