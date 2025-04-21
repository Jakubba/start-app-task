import React from 'react';
import { motion } from 'framer-motion';
import { plans } from './../../data/pricingPlansData';
import { Plan } from './PricingPlans.types';
import {
  planContainerVariants,
  itemVariants,
  innerItemVariants,
  listVariants,
} from './PricingPlans.motion';
import './PricingPlans.styles.scss';

const PricingPlans: React.FC = () => {
  return (
    <motion.ul className="pricing__list" variants={listVariants} initial="hidden" animate="visible">
      {plans.map((plan: Plan, index: number) => (
        <motion.li className="pricing__item" key={index} variants={itemVariants}>
          <motion.div className="plan" variants={planContainerVariants}>
            <motion.h3 className="plan__title" variants={innerItemVariants}>
              {plan.title}
            </motion.h3>

            <motion.div className="plan__price-wrapper" variants={innerItemVariants}>
              <motion.span className="plan__price" variants={innerItemVariants}>
                {plan.price}
              </motion.span>
              <motion.div className="plan__details" variants={innerItemVariants}>
                <motion.span className="plan__trial" variants={innerItemVariants}>
                  per user
                </motion.span>
                <motion.span className="plan__cancel" variants={innerItemVariants}>
                  per month
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p className="plan__description" variants={innerItemVariants}>
              {plan.description}
            </motion.p>
          </motion.div>
          <motion.ul className="plan__features" variants={planContainerVariants}>
            {plan.features.map((feature, i) => (
              <motion.li
                className={`plan__feature ${feature.active ? 'plan__feature--active' : ''}`}
                key={i}
                variants={innerItemVariants}
              >
                {feature.text}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button className="plan__btn" variants={innerItemVariants}>
            Start Free Trial
          </motion.button>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default PricingPlans;
