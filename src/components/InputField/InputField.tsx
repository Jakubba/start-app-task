import React from 'react';
import { motion } from 'framer-motion';
import { InputFieldProps } from './InputField.types';
import { formItemVariants } from './InputField.motion';
import './InputField.styles.scss';

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
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
