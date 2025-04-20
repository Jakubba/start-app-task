import React from 'react';
import { motion, Variants } from 'framer-motion';
import { plans } from './../../data/pricingPlansData';
import { Plan } from './PricingPlans.types';
import './PricingPlans.styles.scss';

const planContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const innerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const listVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1.5,
      duration: 0.6,
    },
  },
};

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
