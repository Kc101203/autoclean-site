import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactFormSchema, type InsertContactForm } from "@shared/schema";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { z } from "zod";
import qrCodeImage from "@assets/WhatsApp Image 2025-07-26 at 16.54.31_38774d9c_1753769734807.jpg";

const formSchema = insertContactFormSchema.extend({
  preferredDateTime: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [serviceTimeEstimate, setServiceTimeEstimate] = useState<string>("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      vehicleType: "",
      servicePackage: "",
      preferredDateTime: "",
      additionalRequirements: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you shortly to confirm your service appointment.",
      });
      form.reset();
      setSelectedVehicle("");
      setServiceTimeEstimate("");
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "Please try again or call us directly at +91 92272 46360.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: FormData) => {
    const submitData: InsertContactForm = {
      ...data,
      preferredDateTime: data.preferredDateTime ? new Date(data.preferredDateTime) : null,
    };
    contactMutation.mutate(submitData);
  };

  // Dynamic service time calculation
  const calculateServiceTime = (vehicleType: string, servicePackage: string) => {
    const serviceTimes: Record<string, Record<string, string>> = {
      car: {
        standard: "15-20 minutes",
        fine: "20-25 minutes",
        premium: "25-30 minutes"
      },
      motorcycle: {
        basic: "8-10 minutes",
        polish: "12-15 minutes"
      },
      scooter: {
        basic: "8-10 minutes", 
        polish: "12-15 minutes"
      }
    };

    if (vehicleType && servicePackage && serviceTimes[vehicleType]?.[servicePackage]) {
      return serviceTimes[vehicleType][servicePackage];
    }
    return "";
  };

  // Handle vehicle type change
  const handleVehicleChange = (value: string) => {
    setSelectedVehicle(value);
    form.setValue("vehicleType", value);
    form.setValue("servicePackage", ""); // Reset package when vehicle changes
    setServiceTimeEstimate("");
  };

  // Handle service package change
  const handleServicePackageChange = (value: string) => {
    form.setValue("servicePackage", value);
    const estimate = calculateServiceTime(selectedVehicle, value);
    setServiceTimeEstimate(estimate);
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-blue-100">Get in touch to book your service or ask any questions</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary rounded-lg p-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Phone</h4>
                    <p className="text-neutral-600 text-lg">+91 92272 46360</p>
                    <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <a href="tel:+919227246360">Call Now</a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-500 rounded-lg p-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">WhatsApp</h4>
                    <p className="text-neutral-600 text-lg">+91 92272 46360</p>
                    <Button asChild variant="link" className="p-0 h-auto text-green-600">
                      <a href="https://wa.me/919227246360" target="_blank" rel="noopener noreferrer">Message Us</a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-500 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Location</h4>
                    <p className="text-neutral-600 text-lg">Opp. Victory Lane, Near Padmawati Bunglows<br />Near Bhavin school, Thaltej<br />Ahmedabad</p>
                    <Button asChild variant="link" className="p-0 h-auto text-red-600">
                      <a href="https://maps.google.com/?q=Victory+Lane+Padmawati+Bunglows+Bhavin+school+Thaltej+Ahmedabad" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Working Hours</h4>
                    <div className="text-neutral-600 text-lg">
                      <p>Monday - Sunday</p>
                      <p className="font-medium">10:00 AM - 7:00 PM</p>
                      <p className="text-sm mt-2 text-green-600">Open 7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h3>
              <p className="text-center text-gray-600 mb-8">
                Get in touch with us to book your service or ask any questions
              </p>
              
              <div className="space-y-4">
                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-lg">
                  <a href="tel:+919227246360">
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now: +91 92272 46360
                  </a>
                </Button>
                
                <Button asChild size="lg" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white py-4 text-lg">
                  <a href="https://wa.me/919227246360" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Walk-ins Welcome!</strong> No appointment needed. Just drive in for quick automatic car wash service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google My Business Integration & Location */}
        <div className="mt-16 max-w-6xl mx-auto">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Visit Our Location</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Location QR Code */}
                <div className="bg-white rounded-lg p-6 min-h-[300px] flex flex-col items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Scan for Location</h4>
                    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
                      <img 
                        src={qrCodeImage}
                        alt="QR Code for Auto Clean Car Wash Location"
                        className="w-48 h-48 mx-auto"
                      />
                    </div>
                    <p className="text-gray-700 mb-4 font-medium">
                      Scan QR code for exact location
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Opp. Victory Lane, Near Padmawati Bunglows</p>
                      <p>Near Bhavin school, Thaltej</p>
                      <p>Ahmedabad</p>
                      <p className="text-green-600 font-medium">Easy parking for cars & bikes</p>
                    </div>
                  </div>
                </div>

                {/* Service Time Information */}
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Clock className="w-6 h-6 mr-2" />
                      Service Time Estimates
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-white mb-2">🚗 Car Services</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between text-blue-100">
                            <span>Standard Wash</span>
                            <span>15-20 minutes</span>
                          </div>
                          <div className="flex justify-between text-blue-100">
                            <span>Fine Wash</span>
                            <span>20-25 minutes</span>
                          </div>
                          <div className="flex justify-between text-blue-100">
                            <span>Premium Wash</span>
                            <span>25-30 minutes</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-white mb-2">🏍️ 2-Wheeler Services</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between text-blue-100">
                            <span>Basic Wash</span>
                            <span>8-10 minutes</span>
                          </div>
                          <div className="flex justify-between text-blue-100">
                            <span>Basic + Polish</span>
                            <span>12-15 minutes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                    <div className="text-center">
                      <p className="text-green-100 font-medium mb-2">
                        ⚡ Walk-ins Welcome
                      </p>
                      <p className="text-green-200 text-sm">
                        No appointment needed • Fast service guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
