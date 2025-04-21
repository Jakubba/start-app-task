import React from 'react';
import { motion } from 'framer-motion';
import { CheckboxFieldProps } from './CheckboxField.types';
import { formItemVariants } from './CheckboxField.motion';
import './CheckboxField.styles.scss';

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ name, checked, onChange, error }) => (
  <motion.div
    className={`auth-form__field auth-form__field--checkbox ${error ? 'auth-form__field--error' : ''}`}
    variants={formItemVariants}
  >
    <input
      className="auth-form__checkbox"
      type="checkbox"
      id={name}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label className="auth-form__label" htmlFor={name}>
      I agree to the Terms of Service.
    </label>
    {error && <span className="auth-form__error">{error}</span>}
  </motion.div>
);
