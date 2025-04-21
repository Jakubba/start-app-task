import React from 'react';
import { useSignInForm } from '../../hooks/useSignInForm';
import { motion } from 'framer-motion';
import { formContainerVariants, formItemVariants } from './SignInForm.motion';
import InputField from '../InputField/InputField';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import './SignInForm.styles.scss';

const SignInForm: React.FC = () => {
  const { formData, errors, loading, handleChange, handleSubmit } = useSignInForm();

  return (
    <motion.form
      className="auth-form__form"
      onSubmit={handleSubmit}
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="auth-form__form-title" variants={formItemVariants}>
        Sign In Now
      </motion.h2>

      <InputField
        name="email"
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        name="password"
        type="password"
        placeholder="Your password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <CheckboxField
        name="terms"
        checked={formData.terms}
        onChange={handleChange}
        error={errors.terms}
      />

      <motion.button
        className="btn btn-secondary"
        type="submit"
        disabled={loading}
        variants={formItemVariants}
      >
        {loading ? <div className="spinner" /> : <span>Sign In</span>}
      </motion.button>

      <motion.div className="auth-form__or" variants={formItemVariants}>
        <span className="auth-form__or--text">or</span>
      </motion.div>

      <motion.button
        className="auth-form__button btn btn-third"
        type="button"
        variants={formItemVariants}
      >
        <span>Login via Twitter</span>
      </motion.button>

      <motion.div className="auth-form__footer" variants={formItemVariants}>
        <p className="auth-form__footer-text">Do you have an Account?</p>
        <button className="auth-form__link link" type="button">
          Sign In
        </button>
      </motion.div>
    </motion.form>
  );
};

export default SignInForm;
