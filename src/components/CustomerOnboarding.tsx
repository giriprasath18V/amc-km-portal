import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Truck } from 'lucide-react';

interface FlowStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

const flowSteps: FlowStep[] = [
  {
    id: '1',
    title: 'External Customer',
    description: 'Initial customer inquiry and interest in our services',
    icon: '👤',
    color: 'bg-blue-500',
    details: [
      'Customer reaches out through various channels',
      'Initial needs assessment and requirements gathering',
      'Preliminary solution discussion',
      'Feasibility analysis and cost estimation'
    ]
  },
  {
    id: '2',
    title: 'Sales Team',
    description: 'Sales team engagement and requirement discussion',
    icon: '💼',
    color: 'bg-green-500',
    details: [
      'Detailed requirement analysis',
      'Solution architecture planning',
      'Proposal preparation and presentation',
      'Contract negotiation and finalization'
    ]
  },
  {
    id: '3',
    title: 'Project Allocation',
    description: 'Resource allocation and project team assignment',
    icon: '📋',
    color: 'bg-purple-500',
    details: [
      'Project team formation',
      'Resource allocation and planning',
      'Timeline establishment',
      'Risk assessment and mitigation planning'
    ]
  },
  {
    id: '4',
    title: 'Onboarding Meeting',
    description: 'Kickoff meeting with stakeholders and project planning',
    icon: '🤝',
    color: 'bg-orange-500',
    details: [
      'Stakeholder introduction and role definition',
      'Project scope and objectives clarification',
      'Communication protocols establishment',
      'Milestone and deliverable planning'
    ]
  },
  {
    id: '5',
    title: 'Collaboration',
    description: 'Active collaboration and implementation phase',
    icon: '⚙️',
    color: 'bg-red-500',
    details: [
      'System development and configuration',
      'Regular progress reviews and updates',
      'Testing and quality assurance',
      'User training and documentation'
    ]
  },
  {
    id: '6',
    title: 'Hypercare',
    description: 'Intensive support and monitoring during go-live',
    icon: '🔧',
    color: 'bg-yellow-500',
    details: [
      '24/7 monitoring and support',
      'Issue resolution and troubleshooting',
      'Performance optimization',
      'User support and guidance'
    ]
  },
  {
    id: '7',
    title: 'Sign Off',
    description: 'Project completion and formal sign-off',
    icon: '✅',
    color: 'bg-teal-500',
    details: [
      'Final testing and validation',
      'Documentation handover',
      'Training completion certification',
      'Project closure and sign-off'
    ]
  }
];

const CustomerOnboarding: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // Calculate oval dimensions based on screen size
  const ovalWidth = Math.min(windowSize.width * 0.7, 800);
  const ovalHeight = Math.min(windowSize.height * 0.6, 500);
  const centerX = ovalWidth / 2;
  const centerY = ovalHeight / 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Customer Onboarding Flow</h1>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 flex justify-center">
            <div className="relative flex items-center justify-center" style={{ width: ovalWidth + 200, height: ovalHeight + 200 }}>
              <svg width={ovalWidth + 200} height={ovalHeight + 200} className="absolute inset-0">
                {/* Oval path */}
                <ellipse
                  cx={(ovalWidth + 200) / 2}
                  cy={(ovalHeight + 200) / 2}
                  rx={ovalWidth / 2}
                  ry={ovalHeight / 2}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="8,4"
                  opacity="0.3"
                />
                
                {/* Flow arrows */}
                {flowSteps.map((step, index) => {
                  const angle = (index * 360) / flowSteps.length;
                  const nextAngle = ((index + 1) * 360) / flowSteps.length;
                  
                  const startAngleRad = (angle * Math.PI) / 180;
                  const endAngleRad = (nextAngle * Math.PI) / 180;
                  
                  const startX = (ovalWidth + 200) / 2 + (ovalWidth / 2) * Math.cos(startAngleRad);
                  const startY = (ovalHeight + 200) / 2 + (ovalHeight / 2) * Math.sin(startAngleRad);
                  const endX = (ovalWidth + 200) / 2 + (ovalWidth / 2) * Math.cos(endAngleRad);
                  const endY = (ovalHeight + 200) / 2 + (ovalHeight / 2) * Math.sin(endAngleRad);
                  
                  return (
                    <g key={`arrow-${index}`}>
                      <defs>
                        <marker
                          id={`arrowhead-${index}`}
                          markerWidth="12"
                          markerHeight="8"
                          refX="10"
                          refY="4"
                          orient="auto"
                        >
                          <polygon
                            points="0 0, 12 4, 0 8"
                            fill="#3b82f6"
                          />
                        </marker>
                      </defs>
                      <path
                        d={`M ${startX} ${startY} A ${ovalWidth / 2} ${ovalHeight / 2} 0 0 1 ${endX} ${endY}`}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        markerEnd={`url(#arrowhead-${index})`}
                        opacity="0.7"
                      />
                    </g>
                  );
                })}
              </svg>
              
              {/* Flow step nodes */}
              {flowSteps.map((step, index) => {
                const angle = (index * 360) / flowSteps.length;
                const x = (ovalWidth + 200) / 2 + (ovalWidth / 2) * Math.cos((angle * Math.PI) / 180);
                const y = (ovalHeight + 200) / 2 + (ovalHeight / 2) * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: x, top: y }}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <motion.div 
                      className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white cursor-pointer`}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <div className="text-xl mb-1">{step.icon}</div>
                        <div className="text-xs font-bold">{step.id}</div>
                      </div>
                    </motion.div>
                    
                    {/* Step label - only show on hover */}
                    {hoveredStep === step.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-64 z-20"
                      >
                        <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
                          <h3 className="font-bold text-lg text-gray-800 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-4">
                            {step.description}
                          </p>
                          <h4 className="font-bold text-sm text-gray-800 mb-2">Details:</h4>
                          <ul className="space-y-1">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start text-xs text-gray-600">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Center logo/title */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
                className="absolute bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full w-24 h-24 flex items-center justify-center shadow-2xl border-4 border-white"
                style={{ left: (ovalWidth + 200) / 2, top: (ovalHeight + 200) / 2, transform: 'translate(-50%, -50%)' }}
              >
                <div className="text-center text-white">
                  <div className="text-2xl mb-1">❄️</div>
                  <div className="text-xs font-bold">AMC</div>
                  <div className="text-xs opacity-90">Flow</div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Process Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="font-bold text-lg mb-2">Cold Storage Focus</h3>
              <p className="text-sm text-gray-600">Specialized onboarding for temperature-controlled environments</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-lg mb-2">Collaborative Approach</h3>
              <p className="text-sm text-gray-600">Close partnership throughout the entire implementation journey</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-lg mb-2">Success Focused</h3>
              <p className="text-sm text-gray-600">Dedicated support until successful project completion and sign-off</p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Onboarding Timeline</h2>
            <div className="grid md:grid-cols-7 gap-4">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white mx-auto mb-3 shadow-lg`}>
                    <span className="text-lg">{step.icon}</span>
                  </div>
                  <h3 className="font-semibold text-sm text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerOnboarding;