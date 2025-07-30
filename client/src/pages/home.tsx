import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import PackageComparison from "@/components/package-comparison";
import BusinessGallery from "@/components/business-gallery";

import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <PackageComparison />
      <BusinessGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
