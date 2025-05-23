import React from 'react';
import { motion } from 'framer-motion';
import { plans } from './../../data/pricingPlansData';
import { Plan } from './PricingPlans.types';
import useWindowSize from '../../hooks/useWindowSize';
import {
  planContainerVariants,
  itemVariants,
  innerItemVariants,
  listVariants,
} from './PricingPlans.motion';
import './PricingPlans.styles.scss';

const PricingPlans: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <motion.ul className="pricing__list" variants={listVariants} initial="hidden" animate="visible">
      {plans.map((plan: Plan, index: number) => (
        <motion.li
          className="pricing__item"
          key={plan.title || index}
          variants={itemVariants}
          {...(isMobile && {
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, amount: 0.5 },
          })}
        >
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
                  {plan.user}
                </motion.span>
                <motion.span className="plan__cancel" variants={innerItemVariants}>
                  {plan.time}
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
                key={i}
                className={`plan__feature ${feature.active ? 'plan__feature--active' : ''}`}
                variants={innerItemVariants}
              >
                {feature.text}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button className="plan__btn" variants={innerItemVariants}>
            {plan.btnText}
          </motion.button>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default PricingPlans;
