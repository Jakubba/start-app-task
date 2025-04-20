import { Plan } from '../components/PricingPlans/PricingPlans.types';
export const plans: Plan[] = [
  {
    title: 'Start',
    price: 19,
    description:
      'All the features you need to keep your personal files safe, accessible, and easy to share.',
    features: [
      { text: '2GB of hosting space', active: true },
      { text: '14 days of free backups', active: true },
      { text: 'Social integrations', active: false },
      { text: 'Advanced client billing', active: false },
    ],
  },
  {
    title: 'Enterprise',
    price: 49,
    description:
      'All the features you need to keep your personal files safe, accessible, and easy to share.',
    features: [
      { text: '2GB of hosting space', active: true },
      { text: '14 days of free backups', active: true },
      { text: 'Social integrations', active: true },
      { text: 'Advanced client billing', active: false },
    ],
  },
  {
    title: 'Enterprise',
    price: 99,
    description:
      'All the features you need to keep your personal files safe, accessible, and easy to share.',
    features: [
      { text: '2GB of hosting space', active: true },
      { text: '14 days of free backups', active: true },
      { text: 'Social integrations', active: true },
      { text: 'Advanced client billing', active: true },
    ],
  },
];
