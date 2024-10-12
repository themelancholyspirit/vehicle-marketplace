import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const footerSections = [
    {
      title: "About Us",
      links: ["Company", "Careers", "Press", "Blog"]
    },
    {
      title: "Support",
      links: ["Help Center", "Safety Center", "Community Guidelines", "Contact Us"]
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"]
    },
    {
      title: "Services",
      links: ["Vehicle Inspection", "Car Financing", "Insurance", "Car Valuation"]
    }
  ]

  const socialIcons = [
    { name: "Facebook", icon: Facebook },
    { name: "Instagram", icon: Instagram },
    { name: "Twitter", icon: Twitter }
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-3xl font-bold text-red-500 mb-4">myauto<span className="text-white">.ge</span></h2>
            <p className="text-gray-300 mb-4">Your trusted platform for buying and selling vehicles in Georgia.</p>
            <div className="flex space-x-4 mb-6">
              {socialIcons.map((icon) => (
                <a key={icon.name} href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  <icon.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@myauto.ge</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+995 32 2 200 200</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Auto Street, Tbilisi, Georgia</span>
              </div>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-red-400">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} myauto.ge. All rights reserved.</p>
          <p className="text-gray-500 mt-2 text-sm">
            Designed with ❤️ for car enthusiasts
          </p>
        </div>
      </div>
    </footer>
  )
}