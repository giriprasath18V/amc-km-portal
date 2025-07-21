import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Building, Award, Globe } from 'lucide-react';

const AboutAMC: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'History',
      image: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg',
      path: '/about/history',
      description: 'Discover our journey from inception to becoming a global leader',
      icon: <Award size={24} />
    },
    {
      title: 'Leaders',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      path: '/about/leaders',
      description: 'Meet the visionary leaders driving our success',
      icon: <Users size={24} />
    },
    {
      title: 'Warehouse',
      image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
      path: '/about/warehouse',
      description: 'Explore our state-of-the-art warehouse facilities',
      icon: <Building size={24} />
    },
    {
      title: 'Team',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      path: '/about/team',
      description: 'Get to know our dedicated team members',
      icon: <Globe size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About AMC</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leading the future of warehouse management with innovative solutions, 
              cutting-edge technology, and unparalleled expertise across global markets.
            </p>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Global Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
          
          {/* Main Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => navigate(section.path)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl text-white">
                      {section.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                    <p className="text-sm opacity-90">{section.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Learn more</span>
                    <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-blue-800 leading-relaxed">
                To revolutionize warehouse management through innovative technology solutions, 
                delivering exceptional value to our clients while maintaining the highest standards 
                of quality, efficiency, and customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Vision</h3>
              <p className="text-purple-800 leading-relaxed">
                To be the global leader in warehouse management solutions, setting industry standards 
                for innovation, sustainability, and operational excellence while empowering businesses 
                to achieve their full potential.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutAMC;