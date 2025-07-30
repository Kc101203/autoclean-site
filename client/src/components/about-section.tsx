export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Auto Clean Car Wash</h2>
            <p className="text-lg text-neutral-600-custom mb-6">
              Welcome to Auto Clean Car Wash - the first automatic car wash facility in Ahmedabad! As a new business, we're excited to bring cutting-edge automatic car washing technology to Thaltej and surrounding areas.
            </p>
            <p className="text-lg text-neutral-600-custom mb-8">
              We specialize in providing quick, efficient, and high-quality cleaning solutions for all types of vehicles - from luxury cars to everyday motorcycles and scooters. Our state-of-the-art automatic equipment and eco-friendly products ensure your vehicle receives exceptional care in record time.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">FIRST</div>
                <p className="text-neutral-600-custom">Automatic Car Wash in Ahmedabad</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8-30</div>
                <p className="text-neutral-600-custom">Minutes Service Time</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Auto Clean Car Wash facility" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
