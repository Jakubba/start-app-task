import React from 'react';
import { motion } from 'framer-motion';
import PricingPlans from '../PricingPlans/PricingPlans';
import { PricingTableProps } from './PricingTable.types';
import {
  formContainerVariants,
  titleVariants,
  subtitleVariants,
  plansVariants,
} from './PricingTable.motion';
import './PricingTable.styles.scss';

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
