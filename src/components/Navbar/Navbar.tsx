import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import './Navbar.styles.scss';

const menuVariants: Variants = {
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

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: -10,
  },
};

const logoVariants: Variants = {
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

const toggleVariants: Variants = {
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

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
      if (window.innerWidth > 992) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <motion.div
          className="navbar__logo"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <Link to="/home" className="navbar__logo--link">
            Startup 3
          </Link>
        </motion.div>

        {!isDesktop && (
          <motion.button
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
            onClick={toggleMenu}
            variants={toggleVariants}
            initial="hidden"
            animate="visible"
            whileTap="tap"
          >
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
            <span className="navbar__toggle-bar"></span>
          </motion.button>
        )}

        <motion.ul
          className={`navbar__list ${isDesktop ? 'navbar__list--always-visible' : ''} ${menuOpen && !isDesktop ? 'navbar__list--active' : ''}`}
          initial={false}
          animate={menuOpen ? 'open' : 'closed'}
          variants={menuVariants}
        >
          {['Overview', 'Prices', 'Blog', 'Feedback'].map((label, i) => (
            <motion.li
              key={label}
              className={`navbar__item ${label === 'Overview' ? 'disabled' : ''}`}
              variants={itemVariants}
            >
              {label === 'Overview' ? (
                label
              ) : (
                <Link to={`/${label.toLowerCase()}`} className="navbar__link">
                  {label}
                </Link>
              )}
            </motion.li>
          ))}
          <motion.li variants={itemVariants}>
            <Link to="/purchase" className="btn btn-small btn-primary">
              <span>Purchase</span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};
