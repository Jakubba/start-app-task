import { Variants } from 'framer-motion';

export const menuVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    display: 'flex',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transitionEnd: {
      display: 'none',
    },
  },
};

export const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

export const logoVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const toggleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};
