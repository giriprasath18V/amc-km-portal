import React, { useEffect, useState } from 'react';
import { ChevronDown, Clock, Globe, Award, Thermometer, Package, Zap, Building2, TrendingUp, Users, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState({
    ist: new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata", hour12: true}),
    est: new Date().toLocaleString("en-US", {timeZone: "America/New_York", hour12: true})
  });

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime({
        ist: new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata", hour12: true}),
        est: new Date().toLocaleString("en-US", {timeZone: "America/New_York", hour12: true})
      });
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 bg-cyan-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-25 animate-ping"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        {/* Main Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
              The future of
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Cold Storage
              </span>
              is here
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
              Revolutionary transportation, logistics, and supply chain solutions 
              with AI-powered temperature control across 200+ global branches.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Global Branches</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-cyan-100 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-600 mb-2">500M+</div>
                <div className="text-sm text-gray-600">Cubic Feet Storage</div>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Package, title: "Transportation", desc: "Global logistics network", color: "blue" },
              { icon: Building2, title: "Warehouse", desc: "Smart storage solutions", color: "cyan" },
              { icon: Thermometer, title: "Temperature", desc: "Control systems", color: "blue" },
              { icon: Globe, title: "Supply Chain", desc: "End-to-end management", color: "cyan" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className={`bg-${service.color}-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`text-${service.color}-600`} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Apple-style Video Sections */}
          <div className="space-y-16 mb-16">
            {/* Main Hero Video */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video 
                className="w-full h-[70vh] object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-12 text-white">
                  <h3 className="text-4xl font-bold mb-4">Experience ArcticVault Technology</h3>
                  <p className="text-xl opacity-90 max-w-2xl">See how our advanced cold storage solutions revolutionize warehouse management with temperature control and AI-powered automation.</p>
                </div>
              </div>
            </div>

            {/* Split Video Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <video 
                  className="w-full h-80 object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Smart Automation</h4>
                    <p className="opacity-90">AI-driven warehouse operations</p>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <video 
                  className="w-full h-80 object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-2xl font-bold mb-2">Global Network</h4>
                    <p className="opacity-90">200+ branches worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Showcase Video */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video 
                className="w-full h-96 object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 flex items-center">
                <div className="container mx-auto px-12">
                  <div className="max-w-2xl text-white">
                    <h3 className="text-4xl font-bold mb-6">Cold Storage Excellence</h3>
                    <p className="text-xl mb-8 opacity-90">
                      Our cutting-edge technology ensures your products are stored at optimal conditions 
                      with real-time monitoring and advanced automation systems.
                    </p>
                    <div className="flex space-x-4">
                      <button className="px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                        Learn More
                      </button>
                      <button className="px-8 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                        Watch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image/Video Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leading Cold Storage Company
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art facilities combine cutting-edge technology with 
                sustainable practices to deliver unparalleled cold storage solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">AI-powered temperature monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-100 p-2 rounded-lg">
                    <TrendingUp className="text-cyan-600" size={20} />
                  </div>
                  <span className="text-gray-700">Real-time analytics and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700">24/7 expert support team</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg"
                alt="Cold Storage Facility"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2 opacity-80">Explore more</span>
        <button 
          onClick={scrollToFeatures} 
          aria-label="Scroll down" 
          className="hover:scale-110 transition-transform duration-300 p-3 rounded-full bg-white shadow-lg border border-gray-100"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;