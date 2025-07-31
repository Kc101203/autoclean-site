import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@assets/WhatsApp Image 2025-07-26 at 17.22.24_4cabd89d_1753769275080.jpg";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16">
      <div 
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 123, 199, 0.7), rgba(0, 123, 199, 0.7)), url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">AUTO CLEAN CAR WASH</h1>
            <p className="text-xl md:text-2xl mb-8 font-light">Transform Dirt Into Glow</p>
            <p className="text-lg md:text-xl mb-12 text-blue-100">First Time Automatic Car Wash in Ahmedabad - Quick & Efficient Cleaning for Cars and 2-Wheelers</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('packages')}
                size="lg"
                className="bg-white text-primary px-8 py-4 text-lg font-semibold hover:bg-blue-50 shadow-lg"
              >
                View Packages
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-primary"
              >
                <a href="tel:+919227246360">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
