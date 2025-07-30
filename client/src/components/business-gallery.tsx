import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import businessImage1 from "@assets/WhatsApp Image 2025-07-26 at 17.22.24_4cabd89d_1753769275080.jpg";
import businessImage2 from "@assets/WhatsApp Image 2025-07-27 at 09.20.45_58a9a068_1753769275081.jpg";

export default function BusinessGallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facility</h2>
          <p className="text-xl text-neutral-600-custom">First Automatic Car Wash in Ahmedabad</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Business Promotional Image */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={businessImage1} 
                  alt="Auto Clean Car Wash - Automatic Car Wash Service"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                    Transform Dirt Into Glow
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Automatic Car Wash</h3>
                <p className="text-neutral-600-custom mb-4">
                  Experience the first automatic car wash in Ahmedabad. Quick and efficient cleaning 
                  for both cars and 2-wheelers with modern technology.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Cars</Badge>
                  <Badge variant="outline" className="text-xs">2-Wheelers</Badge>
                  <Badge variant="outline" className="text-xs">Quick Service</Badge>
                  <Badge variant="outline" className="text-xs">Modern Equipment</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Chart */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={businessImage2} 
                  alt="Auto Clean Car Wash Pricing - Hatchback, Sedan, SUV Rates"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-medium">
                    Competitive Pricing
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                <p className="text-neutral-600-custom mb-4">
                  Clear pricing structure for all vehicle types - from Hatchback to Big SUV. 
                  Three service levels: Standard, Fine, and Premium wash options.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800">Standard Wash</h4>
                    <p className="text-neutral-600-custom">₹399 - ₹699</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fine Wash</h4>
                    <p className="text-neutral-600-custom">₹499 - ₹799</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Premium Wash</h4>
                    <p className="text-neutral-600-custom">₹599 - ₹999</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Vehicle Types</h4>
                    <p className="text-neutral-600-custom">All sizes covered</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Automatic System</h3>
              <p className="text-neutral-600-custom text-sm">First time in Ahmedabad</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Service</h3>
              <p className="text-neutral-600-custom text-sm">Efficient cleaning process</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏍️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2-Wheeler Service</h3>
              <p className="text-neutral-600-custom text-sm">Motorcycles & scooters</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transform Dirt</h3>
              <p className="text-neutral-600-custom text-sm">Into glow & shine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}