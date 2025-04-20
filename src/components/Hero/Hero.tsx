import React from 'react';
import { Navbar } from './../Navbar/Navbar';
import SignInForm from './../SignInForm/SignInForm';
import { HeroProps } from './Hero.types.ts';
import { motion, Variants } from 'framer-motion';

import './Hero.styles.scss';

const Hero: React.FC<HeroProps> = ({ title, description, buttonText }) => {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero__content">
        <motion.div
          className="hero__intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.5,
                when: 'beforeChildren',
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="hero__title"
            variants={{
              hidden: {
                opacity: 0,
                x: -30,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="hero__description"
            variants={{
              hidden: {
                opacity: 0,
                x: -30,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            {description}
          </motion.p>
          <motion.button
            className="btn btn-middle btn-primary"
            variants={{
              hidden: {
                opacity: 0,
                x: -30,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            <span>{buttonText}</span>
          </motion.button>
        </motion.div>
        <SignInForm />
      </div>
    </section>
  );
};

export default Hero;
