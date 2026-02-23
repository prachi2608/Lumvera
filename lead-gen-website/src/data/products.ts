import { FiBox, FiBriefcase, FiZap } from 'react-icons/fi';

export interface Product {
  id: string;
  icon: any;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'outbound-lead-generation',
    icon: FiBox,
    title: 'Outbound Lead Generation',
    description: 'We build and manage your outbound engine - from targeting to booked meetings.',
    detailedDescription: 'Our outbound lead generation service helps you identify and connect with potential customers through targeted outreach. We handle everything from prospect research to scheduling qualified meetings, ensuring your sales team focuses on closing deals.',
    features: [
      'Prospect research and list building',
      'Multi-channel outreach (email, phone, LinkedIn)',
      'CRM integration',
      'Performance tracking and reporting',
      'Qualified meeting scheduling'
    ]
  },
  {
    id: 'End-to-End Sales Setup',
    icon: FiBriefcase,
    title: 'End-to-End Sales Setup',
    description: 'We build your complete sales foundation — from strategy to systems — so you can scale with clarity.',
    detailedDescription: 'Product B provides comprehensive analytics solutions that transform your raw data into actionable insights. Our advanced algorithms help you understand customer behavior, optimize processes, and make informed strategic decisions.',
    features: [
      'Real-time data visualization',
      'Predictive analytics',
      'Custom dashboard creation',
      'Data integration from multiple sources',
      'Automated reporting'
    ]
  },
  {
    id: 'product-c',
    icon: FiZap,
    title: 'Product C',
    description: 'Lightning-fast automation tools to streamline your workflows.',
    detailedDescription: 'Product C is designed to automate repetitive tasks and streamline complex workflows. With our cutting-edge automation technology, you can reduce manual work, minimize errors, and increase overall productivity.',
    features: [
      'Workflow automation',
      'Task scheduling',
      'API integrations',
      'Error handling and notifications',
      'Performance monitoring'
    ]
  },
  {
    id: 'product-d',
    icon: FiBox,
    title: 'Product D',
    description: 'Secure cloud infrastructure solutions for scalable applications.',
    detailedDescription: 'Product D offers robust cloud infrastructure that scales with your business needs. We provide secure, reliable hosting solutions with enterprise-grade security features and 99.9% uptime guarantees.',
    features: [
      'Auto-scaling infrastructure',
      'Enterprise security',
      'Backup and disaster recovery',
      '24/7 monitoring and support',
      'Cost optimization tools'
    ]
  },
  {
    id: 'product-e',
    icon: FiBriefcase,
    title: 'Product E',
    description: 'Comprehensive CRM system with advanced customer management features.',
    detailedDescription: 'Product E is a full-featured CRM solution that helps you manage customer relationships effectively. From lead tracking to customer support, our CRM provides all the tools you need to nurture leads and retain customers.',
    features: [
      'Lead and opportunity management',
      'Customer communication tracking',
      'Sales pipeline visualization',
      'Automated follow-ups',
      'Integration with marketing tools'
    ]
  },
  {
    id: 'product-f',
    icon: FiZap,
    title: 'Product F',
    description: 'AI-powered marketing tools for personalized campaigns.',
    detailedDescription: 'Product F leverages artificial intelligence to create highly targeted marketing campaigns. Our AI analyzes customer data to deliver personalized messages that drive engagement and conversions.',
    features: [
      'AI-driven content personalization',
      'Predictive lead scoring',
      'Automated campaign optimization',
      'A/B testing automation',
      'Multi-channel campaign management'
    ]
  },
];
