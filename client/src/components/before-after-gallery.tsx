import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BeforeAfterGallery() {
  return (
    <section className="py-16 bg-neutral-50-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After</h2>
          <p className="text-xl text-neutral-600-custom">See the transformation our professional services deliver</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Car Before/After */}
          <Card className="bg-white shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Car Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-neutral-600-custom mb-2">Before</p>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Car before cleaning" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-600-custom mb-2">After</p>
                  <img 
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Car after professional cleaning" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  Premium Package - 60 mins
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Motorcycle Before/After */}
          <Card className="bg-white shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Motorcycle Transformation</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-neutral-600-custom mb-2">Before</p>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Motorcycle before cleaning" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-600-custom mb-2">After</p>
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                    alt="Motorcycle after professional cleaning" 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  Complete Care - 30 mins
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
