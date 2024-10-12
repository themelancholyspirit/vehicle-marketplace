import { Heart, MessageSquare, ChevronDown, ChevronUp, Printer, Share2, Camera, Star } from 'lucide-react';
import { useState } from 'react';

const SpecificationSection = ({ title, items }: { title: string; items: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b py-3">
      <div 
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        {isOpen ? <ChevronUp size={24} className="text-blue-500" /> : <ChevronDown size={24} className="text-gray-400" />}
      </div>
      {isOpen && (
        <ul className="mt-3 space-y-2 pl-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function CarDetailPage() {
  const specifications = {
    Comfort: [
      "Steering Hydraulics", "On-Board Computer", "Air Conditioning",
      "Parking Control", "Rear View Camera", "Electric Side Mirrors",
      "Climate Control", "Cruise Control", "Start-Stop System"
    ],
    Interior: ["Sunroof", "Heated Seats", "Memory Seats"],
    Safety: ["ABS", "ESP", "Central Locking", "Alarm System", "Fog Lamp"],
    Multimedia: [
      "Central Screen (Navigation)", "AUX", "Bluetooth",
      "Multifunction Steering Wheel"
    ],
    Other: ["Rims", "Spare Tyre", "Disabled Accessible"]
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column */}
        <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">Toyota Prius 2017</h1>
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span className="mr-4 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Samtredia</span>
            <span className="mr-4 flex items-center"><Camera size={16} className="mr-1" /> 1 View</span>
            <span className="flex items-center"><Star size={16} className="mr-1 text-yellow-400" /> 11 minutes ago</span>
            <span className="ml-auto text-blue-500 font-semibold">ID: 108724125</span>
          </div>
          
          {/* Main image and thumbnails */}
          <div className="mb-8">
            <img src="/path-to-main-image.jpg" alt="Toyota Prius 2017" className="w-full h-96 object-cover rounded-lg mb-4 shadow-md" />
            <div className="grid grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} src={`/path-to-thumbnail-${i}.jpg`} alt={`Thumbnail ${i}`} className="w-full h-24 object-cover rounded-lg shadow-sm hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
              ))}
            </div>
          </div>
          
          {/* Detailed Description */}
          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Description</h2>
            <p className="text-gray-700 leading-relaxed">
              მანქანა არის იდეალურ მდგომარებაში, ჩ��მოსულია აირბაგ გაუხსნელი.
            </p>
          </section>

          {/* Main Specifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Main Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "Manufacturer", value: "Toyota" },
                { label: "Model", value: "Prius" },
                { label: "Year", value: "2017" },
                { label: "Category", value: "Sedan" },
                { label: "Mileage", value: "70000 km" },
                { label: "Fuel type", value: "Hybrid" },
                { label: "Engine Volume", value: "1.8" },
                { label: "Cylinders", value: "4" },
                { label: "Gear box type", value: "Automatic" },
                { label: "Drive wheels", value: "Front" },
                { label: "Doors", value: "4/5" },
                { label: "Airbags", value: "12" },
                { label: "Wheel", value: "Left" },
                { label: "Color", value: "Blue" },
                { label: "Interior color", value: "Black" },
                { label: "Interior material", value: "Fabric" },
                { label: "Exchange", value: "No" },
                { label: "Technical inspection", value: "Yes" },
                { label: "Catalyst", value: "Yes" },
                { label: "VIN", value: "- - -" }
              ].map((spec, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <span className="font-semibold text-gray-700 block">{spec.label}:</span>
                  <span className="text-gray-600">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications */}
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Specifications</h2>
            {Object.entries(specifications).map(([category, items]) => (
              <SpecificationSection key={category} title={category} items={items} />
            ))}
          </section>
        </div>
        
        {/* Right column */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
            <div className="bg-red-100 text-red-800 text-sm font-semibold py-2 px-4 rounded-full inline-block mb-4">
              გამოყენებული 20 წლამდე ავტომობილები გათავისუფლებულია
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-green-500 font-semibold text-lg">Customs-cleared</span>
              <Heart className="text-red-400 cursor-pointer hover:text-red-500 transition-colors duration-200" size={24} />
            </div>
            <p className="text-3xl font-bold mb-6 text-gray-800">Price negotiable</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg mb-6 transition-colors duration-200 text-lg font-semibold">
              LOAN IN 2 MINUTES
            </button>
            <div className="flex items-center mb-6 bg-gray-50 p-4 rounded-lg">
              <img src="/path-to-user-avatar.jpg" alt="User" className="w-14 h-14 rounded-full mr-4 border-2 border-blue-500" />
              <div>
                <p className="font-semibold text-lg">beso</p>
                <p className="text-sm text-gray-500">1 All listings</p>
              </div>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Write a message"
                className="w-full border-2 border-gray-300 focus:border-blue-500 rounded-lg py-3 px-4 pr-12 transition-colors duration-200"
              />
              <MessageSquare className="absolute right-3 top-3 text-gray-400" size={24} />
            </div>
            <button className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-3 rounded-lg transition-colors duration-200 text-lg font-semibold">
              511 10 3*** Show phone
            </button>
          </div>
        </div>
      </div>
      
      {/* Action buttons */}
      <div className="fixed bottom-6 right-6 flex space-x-3">
        <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
          <MessageSquare size={24} className="text-blue-500" />
        </button>
        <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
          <Printer size={24} className="text-green-500" />
        </button>
        <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
          <Share2 size={24} className="text-purple-500" />
        </button>
      </div>
    </div>
  );
}
