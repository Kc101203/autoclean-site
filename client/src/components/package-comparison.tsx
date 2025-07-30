import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Car, Bike, Phone, MessageCircle } from "lucide-react";

export default function PackageComparison() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    // Optionally scroll to contact after selection
    setTimeout(() => scrollToContact(), 100);
  };

  const carPackages = [
    {
      id: "standard-hatchback",
      name: "Standard Wash",
      price: "₹399 - ₹699",
      duration: "30 minutes",
      description: "Hatchback to Big SUV pricing",
      popular: false,
      features: [
        "Automatic car wash",
        "Exterior cleaning", 
        "Tire cleaning",
        "Window cleaning"
      ]
    },
    {
      id: "fine-sedan",
      name: "Fine Wash",
      price: "₹499 - ₹799",
      duration: "45 minutes",
      description: "Enhanced cleaning for all car types",
      popular: true,
      features: [
        "Everything in Standard",
        "Liquid wax polish"
      ]
    },
    {
      id: "premium-luxury",
      name: "Premium Wash",
      price: "₹599 - ₹999",
      duration: "60 minutes",
      description: "Ultimate automatic car wash experience",
      popular: false,
      features: [
        "Everything in Fine Wash",
        "Dashboard polish",
        "Tire polish"
      ]
    }
  ];

  const bikePackages = [
    {
      id: "quick-bike",
      name: "Basic Wash",
      price: "₹99",
      duration: "15 minutes",
      description: "Essential 2-wheeler cleaning",
      popular: true,
      features: [
        "Basic washing",
        "Tire cleaning",
        "Drying"
      ]
    },
    {
      id: "complete-bike",
      name: "Basic Wash + Polish",
      price: "₹199",
      duration: "25 minutes",
      description: "Basic wash with polish finishing",
      popular: false,
      features: [
        "Everything in Basic Wash",
        "Polish (Extra ₹100)"
      ]
    }
  ];

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Packages</h2>
          <p className="text-xl text-neutral-600-custom">Compare and choose the perfect package for your vehicle</p>
        </div>

        <Tabs defaultValue="cars" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
            <TabsTrigger value="cars" className="flex items-center gap-2">
              <Car className="w-4 h-4" />
              Car Packages
            </TabsTrigger>
            <TabsTrigger value="bikes" className="flex items-center gap-2">
              <Bike className="w-4 h-4" />
              2-Wheeler Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cars" id="car-packages">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Car Wash Packages</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {carPackages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`relative transition-all cursor-pointer ${
                    selectedPackage === pkg.id
                      ? 'border-2 border-green-500 shadow-xl ring-2 ring-green-200'
                      : pkg.popular 
                        ? 'border-2 border-primary transform hover:scale-105 shadow-lg' 
                        : 'border-2 border-gray-200 hover:border-primary hover:shadow-lg'
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-6 py-2">Most Popular</Badge>
                    </div>
                  )}
                  {selectedPackage === pkg.id && (
                    <div className="absolute -top-4 right-4">
                      <Badge className="bg-green-500 text-white px-4 py-2">Selected</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                      <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                      <div className="flex items-center justify-center gap-2 text-neutral-600-custom mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <p className="text-sm text-neutral-500">{pkg.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePackageSelect(pkg.id);
                      }}
                      className={`w-full ${
                        selectedPackage === pkg.id
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : pkg.popular 
                            ? 'bg-primary hover:bg-primary-dark text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bikes" id="bike-packages">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">2-Wheeler Packages</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {bikePackages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`relative transition-all cursor-pointer ${
                    selectedPackage === pkg.id
                      ? 'border-2 border-green-500 shadow-xl ring-2 ring-green-200'
                      : pkg.popular 
                        ? 'border-2 border-primary transform hover:scale-105 shadow-lg' 
                        : 'border-2 border-gray-200 hover:border-primary hover:shadow-lg'
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white px-6 py-2">Recommended</Badge>
                    </div>
                  )}
                  {selectedPackage === pkg.id && (
                    <div className="absolute -top-4 right-4">
                      <Badge className="bg-green-500 text-white px-4 py-2">Selected</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                      <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                      <div className="flex items-center justify-center gap-2 text-neutral-600-custom mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <p className="text-sm text-neutral-500">{pkg.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePackageSelect(pkg.id);
                      }}
                      className={`w-full ${
                        selectedPackage === pkg.id
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : pkg.popular 
                            ? 'bg-primary hover:bg-primary-dark text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Package Information */}
        {selectedPackage && (
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Package Selected!</h3>
                <p className="text-blue-700 text-lg mb-6">
                  Great choice! Contact us to get your {selectedPackage.includes('car') ? 'car' : '2-wheeler'} service.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                    <a href="tel:+919227246360">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-6 py-2">
                    <a href="https://wa.me/919227246360" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
