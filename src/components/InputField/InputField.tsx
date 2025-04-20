import React from 'react';
import { motion, Variants } from 'framer-motion';
import { InputFieldProps } from './InputField.types';
import './InputField.styles.scss';

const formItemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <motion.div
      className={`auth-form__field ${error ? 'auth-form__field--error' : ''}`}
      variants={formItemVariants}
    >
      <input
        className="auth-form__input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="auth-form__error">{error}</span>}
    </motion.div>
  );
};

export default InputField;
