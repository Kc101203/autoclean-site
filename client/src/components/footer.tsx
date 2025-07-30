import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/WhatsApp Image 2025-07-26 at 16.46.06_620b18a0_1753769730245.jpg";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Auto Clean Car Wash Logo" 
                className="h-16 w-auto mr-4"
              />
            </div>
            <p className="text-gray-300 mb-6">
              Transform Dirt Into Glow - First Automatic Car Wash in Ahmedabad. Quick and efficient cleaning for cars and 2-wheelers with modern technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/autocleancar.wash?utm_source=qr&igsh=dmRtcmhqbXkyNWth" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919227246360" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('packages')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-gray-300">+91 92272 46360</span>
              </div>

              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1" />
                <span className="text-gray-300">Opp. Victory Lane, Near Padmawati Bunglows<br />Near Bhavin school, Thaltej<br />Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Auto Clean Car Wash. All rights reserved. | First Automatic Car Wash in Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  );
}
