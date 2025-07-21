import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, Cloud, Cpu, Settings } from 'lucide-react';

const ApplicationDetail: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const applicationData: { [key: string]: any } = {
    'koerber': {
      name: 'Koerber WMS',
      description: 'Advanced Warehouse Management System providing comprehensive control over warehouse operations with real-time visibility and optimization.',
      icon: <Database size={48} />,
      color: 'blue',
      image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg',
      features: [
        'Real-time inventory tracking',
        'Advanced picking strategies',
        'Labor optimization',
        'Multi-client support',
        'Integration capabilities'
      ],
      benefits: [
        'Increased operational efficiency',
        'Reduced labor costs',
        'Improved inventory accuracy',
        'Enhanced customer satisfaction',
        'Scalable architecture'
      ]
    },
    'blue-yonder': {
      name: 'Blue Yonder / JDA / RP',
      description: 'Comprehensive supply chain planning and execution platform that optimizes inventory, labor, and transportation across the entire supply chain.',
      icon: <Cloud size={48} />,
      color: 'green',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg',
      features: [
        'AI-driven forecasting',
        'End-to-end visibility',
        'Dynamic optimization',
        'Cloud-native architecture',
        'Machine learning algorithms'
      ],
      benefits: [
        'Improved demand forecasting',
        'Reduced inventory costs',
        'Enhanced supply chain visibility',
        'Better decision making',
        'Increased agility'
      ]
    },
    'iseries': {
      name: 'iSeries P2/Atlanta',
      description: 'Legacy warehouse management system running on IBM iSeries platform, providing robust and reliable warehouse operations.',
      icon: <Cpu size={48} />,
      color: 'purple',
      image: 'https://images.pexels.com/photos/4481141/pexels-photo-4481141.jpeg',
      features: [
        'IBM iSeries reliability',
        'Proven stability',
        'Custom modifications',
        'Legacy integration',
        'Robust reporting'
      ],
      benefits: [
        'High system reliability',
        'Proven track record',
        'Cost-effective maintenance',
        'Seamless integration',
        'Comprehensive reporting'
      ]
    },
    'i3pl': {
      name: 'i3PL',
      description: 'Third-party logistics management system designed specifically for 3PL providers to manage multiple clients and complex billing scenarios.',
      icon: <Settings size={48} />,
      color: 'orange',
      image: 'https://images.pexels.com/photos/4481332/pexels-photo-4481332.jpeg',
      features: [
        'Multi-tenant architecture',
        'Flexible billing models',
        'Client-specific configurations',
        'Performance dashboards',
        'Automated invoicing'
      ],
      benefits: [
        'Streamlined 3PL operations',
        'Flexible billing options',
        'Improved client satisfaction',
        'Enhanced visibility',
        'Automated processes'
      ]
    }
  };

  const app = applicationData[slug || ''];

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Application Not Found</h1>
          <button
            onClick={() => navigate('/applications')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Applications
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/applications')}
            className="mb-6 flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Applications
          </button>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img
                src={app.image}
                alt={app.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white flex items-center">
                <div className={`bg-${app.color}-600 p-3 rounded-lg mr-4`}>
                  {app.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{app.name}</h1>
                  <p className="text-lg opacity-90">Cold Storage Application</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">{app.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
                  <div className="space-y-4">
                    {app.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 bg-${app.color}-600 rounded-full mr-3`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits</h2>
                  <div className="space-y-4">
                    {app.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-2 h-2 bg-${app.color}-600 rounded-full mr-3`}></div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`mt-8 bg-${app.color}-50 rounded-lg p-6`}>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cold Storage Integration</h2>
                <p className="text-gray-700 leading-relaxed">
                  This application is specifically optimized for cold storage warehouse operations, 
                  providing temperature-sensitive inventory management, specialized handling procedures, 
                  and compliance with food safety regulations. Our implementation ensures seamless 
                  integration with your existing cold storage infrastructure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationDetail;