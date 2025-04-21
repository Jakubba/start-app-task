import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavbarProps } from './Navbar.types';
import { menuVariants, itemVariants, logoVariants, toggleVariants } from './Navbar.motion';
import useWindowSize from '../../hooks/useWindowSize';
import './Navbar.styles.scss';

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isDesktop = width > 992;

  useEffect(() => {
    if (isDesktop) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [isDesktop]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  if (!Array.isArray(menuItems)) {
    console.error('Menu items should be an array');
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <motion.div
          className="navbar__logo"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <Link to="/#" className="navbar__logo--link">
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
          {menuItems.map((label) =>
            label ? (
              <motion.li key={label} variants={itemVariants}>
                <Link to={`/${label.toLowerCase()}`} className="navbar__link">
                  {label}
                </Link>
              </motion.li>
            ) : null
          )}
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

export default Navbar;
