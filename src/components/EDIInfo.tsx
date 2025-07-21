import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface EDIType {
  code: string;
  name: string;
  description: string;
  details: string[];
  sampleImage: string;
}

const ediTypes: EDIType[] = [
  {
    code: '943',
    name: 'Warehouse Stock Transfer Shipment Advice',
    description: 'Used to communicate warehouse stock transfer shipment details',
    details: [
      'Tracks movement of inventory between warehouse locations',
      'Includes detailed item information and quantities',
      'Records source and destination locations',
      'Contains shipment tracking information'
    ],
    sampleImage: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg'
  },
  {
    code: '944',
    name: 'Warehouse Stock Transfer Receipt Advice',
    description: 'Confirms receipt of transferred stock between warehouses',
    details: [
      'Acknowledges receipt of transferred inventory',
      'Validates quantities received against shipped',
      'Records any discrepancies or damages',
      'Updates inventory system automatically'
    ],
    sampleImage: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg'
  },
  {
    code: '940',
    name: 'Warehouse Shipping Order',
    description: 'Instructions for shipping products from a warehouse',
    details: [
      'Contains detailed picking instructions',
      'Specifies shipping method and carrier',
      'Includes special handling requirements',
      'Provides customer delivery information'
    ],
    sampleImage: 'https://images.pexels.com/photos/4481141/pexels-photo-4481141.jpeg'
  },
  {
    code: '945',
    name: 'Warehouse Shipping Advice',
    description: 'Confirms shipment of products from a warehouse',
    details: [
      'Confirms order fulfillment details',
      'Includes tracking numbers and carrier info',
      'Lists actual quantities shipped',
      'Records shipping date and time'
    ],
    sampleImage: 'https://images.pexels.com/photos/4481332/pexels-photo-4481332.jpeg'
  },
  {
    code: '856',
    name: 'Ship Notice/Manifest',
    description: 'Detailed shipment information including contents and tracking',
    details: [
      'Provides advance notice of incoming shipments',
      'Contains hierarchical packaging details',
      'Includes product identification and quantities',
      'Lists transportation details and routing'
    ],
    sampleImage: 'https://images.pexels.com/photos/4481345/pexels-photo-4481345.jpeg'
  },
  {
    code: '947',
    name: 'Warehouse Inventory Adjustment Advice',
    description: 'Reports inventory adjustments in the warehouse',
    details: [
      'Records inventory count adjustments',
      'Documents reasons for adjustments',
      'Tracks inventory accuracy metrics',
      'Maintains audit trail of changes'
    ],
    sampleImage: 'https://images.pexels.com/photos/4481350/pexels-photo-4481350.jpeg'
  },
  {
    code: '210',
    name: 'Motor Carrier Freight Details',
    description: 'Contains freight transportation details and invoice information',
    details: [
      'Specifies freight charges and terms',
      'Includes pickup and delivery information',
      'Details weight and dimensions',
      'Lists special handling requirements'
    ],
    sampleImage: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg'
  }
];

const EDIInfo: React.FC = () => {
  const handleSampleClick = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">EDI Information</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Electronic Data Interchange (EDI) standards for cold storage warehouse operations. 
            Click on sample documents to view them in a new tab.
          </p>
          
          <div className="grid gap-8">
            {ediTypes.map((edi, index) => (
              <motion.div
                key={edi.code}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-600 text-white rounded-lg px-6 py-3 text-2xl font-bold mr-6">
                        EDI {edi.code}
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold text-gray-800">{edi.name}</h2>
                        <p className="text-gray-600 mt-1">{edi.description}</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4 text-lg">Key Features:</h3>
                      <ul className="space-y-3">
                        {edi.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 p-8 bg-gray-50">
                    <h3 className="font-semibold text-gray-800 mb-4 text-lg">Sample EDI Document</h3>
                    <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer"
                         onClick={() => handleSampleClick(edi.sampleImage)}>
                      <img
                        src={edi.sampleImage}
                        alt={`EDI ${edi.code} Sample`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <div className="p-4 text-white w-full">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold">EDI {edi.code} Format</p>
                              <p className="text-xs opacity-90">Click to view sample</p>
                            </div>
                            <ExternalLink size={20} className="opacity-80" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink size={32} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-800 mb-2">Document Details</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>Format: X12 Standard</div>
                        <div>Version: 4010</div>
                        <div>Usage: Cold Storage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">EDI Implementation Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2">Faster Processing</h3>
                <p className="text-gray-600 text-sm">Automated data exchange reduces processing time by up to 80%</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Higher Accuracy</h3>
                <p className="text-gray-600 text-sm">Eliminates manual data entry errors and improves data quality</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold mb-2">Cost Reduction</h3>
                <p className="text-gray-600 text-sm">Reduces operational costs through automation and efficiency</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EDIInfo;