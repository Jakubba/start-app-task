import React from 'react';
import { motion, Variants } from 'framer-motion';
import PricingPlans from '../PricingPlans/PricingPlans';
import { PricingTableProps } from './Pricing.types';
import './PricingTable.styles.scss';

const formContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 },
  },
};

const plansVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const PricingTable: React.FC<PricingTableProps> = ({ title, subtitle }) => {
  const displayTitle = title || 'Simple & flexible pricing built for everyone';
  const displaySubtitle =
    subtitle || 'Start with 14-day free trial. No credit card needed. Cancel at any time.';

  return (
    <motion.section
      className="pricing"
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="pricing__header">
        <motion.h2 className="pricing__title" variants={titleVariants}>
          {displayTitle}
        </motion.h2>
        <motion.p className="pricing__subtitle" variants={subtitleVariants}>
          {displaySubtitle}
        </motion.p>
      </div>
      <motion.div className="pricing__plans" variants={plansVariants}>
        <PricingPlans />
      </motion.div>
    </motion.section>
  );
};

export default PricingTable;
