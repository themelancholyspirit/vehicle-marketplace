import { Search, Globe, User } from 'lucide-react'

export default function Header() {
  return (
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
  )
}