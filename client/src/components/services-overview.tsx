import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function ServicesOverview() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const carServices = [
    "Exterior wash & wax",
    "Interior cleaning & vacuum",
    "Engine bay cleaning",
    "Paint protection"
  ];

  const bikeServices = [
    "Complete bike washing",
    "Chain cleaning & lubrication",
    "Seat & handle detailing",
    "Chrome polishing"
  ];

  return (
    <section id="services" className="py-16 bg-neutral-50-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-neutral-600-custom max-w-2xl mx-auto">
            Professional cleaning services for all types of vehicles with state-of-the-art equipment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 4-Wheeler Services */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Professional car wash service" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4-Wheeler Services</h3>
              <p className="text-neutral-600-custom mb-6">
                Complete car care including sedans, SUVs, hatchbacks, and luxury vehicles
              </p>
              <ul className="space-y-3 mb-8">
                {carServices.map((service) => (
                  <li key={service} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <div className="text-primary">
                  <span className="text-sm font-medium">Starting from</span>
                  <div className="text-2xl font-bold">₹299</div>
                </div>
                <Button 
                  onClick={() => scrollToSection('car-packages')}
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  View Packages
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 2-Wheeler Services */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="aspect-video relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
                alt="Motorcycle and scooter wash service" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2-Wheeler Services</h3>
              <p className="text-neutral-600-custom mb-6">
                Specialized care for motorcycles, scooters, and electric bikes
              </p>
              <ul className="space-y-3 mb-8">
                {bikeServices.map((service) => (
                  <li key={service} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <div className="text-primary">
                  <span className="text-sm font-medium">Starting from</span>
                  <div className="text-2xl font-bold">₹99</div>
                </div>
                <Button 
                  onClick={() => scrollToSection('bike-packages')}
                  className="bg-primary hover:bg-primary-dark text-white"
                >
                  View Packages
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
