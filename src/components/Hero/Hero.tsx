import React from 'react';
import Navbar from './../Navbar/Navbar';
import SignInForm from './../SignInForm/SignInForm';
import { HeroProps } from './Hero.types.ts';
import { motion } from 'framer-motion';
import { heroIntroVariants, fadeInLeftVariants } from './Hero.motion';
import './Hero.styles.scss';

const Hero: React.FC<HeroProps> = ({ title, description, buttonText }) => {
  const menuItems = ['Overview', 'Prices', 'Blog', 'Feedback'];
  return (
    <section className="hero">
      <Navbar menuItems={menuItems} />
      <div className="hero__content">
        <motion.div
          className="hero__intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroIntroVariants}
        >
          <motion.h1 className="hero__title" variants={fadeInLeftVariants}>
            {title}
          </motion.h1>
          <motion.p className="hero__description" variants={fadeInLeftVariants}>
            {description}
          </motion.p>
          <motion.button className="btn btn-middle btn-primary" variants={fadeInLeftVariants}>
            <span>{buttonText}</span>
          </motion.button>
        </motion.div>
        <SignInForm />
      </div>
    </section>
  );
};

export default Hero;
