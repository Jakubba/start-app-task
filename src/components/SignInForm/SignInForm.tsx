// import React, { useState, FormEvent, ChangeEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signIn } from './../../api/fakeApi';
// import { useAuth } from './../../hooks/useAuth';
// import { toast } from 'react-hot-toast';
// import InputField from '../InputField/InputField';
// import { CheckboxField } from '../CheckboxField/CheckboxField';
// import { validateForm } from './validation';
// import { FormErrors } from './SignInForm.types';
// import { motion } from 'framer-motion';
// import { formContainerVariants, formItemVariants } from './SignInForm.motion';
// import './SignInForm.styles.scss';

// const SignInForm: React.FC = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<{ email: string; password: string; terms: boolean }>({
//     email: '',
//     password: '',
//     terms: false,
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = ({
//     target: { name, value, type, checked },
//   }: ChangeEvent<HTMLInputElement>) =>
//     setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     if (!validateForm(formData, setErrors)) {
//       Object.values(errors).forEach((error) => toast.error(error));
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await signIn({ email: formData.email, password: formData.password });
//       toast.success(res.message);
//       login();
//       navigate('/pricing');
//     } catch (err: any) {
//       const errorMsg = err.message || 'Something went wrong.';
//       setErrors({ email: errorMsg });
//       toast.error(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.form
//       className="auth-form__form"
//       onSubmit={handleSubmit}
//       variants={formContainerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.h2 className="auth-form__form-title" variants={formItemVariants}>
//         Sign Up Now
//       </motion.h2>

//       <InputField
//         name="email"
//         type="email"
//         placeholder="Your email"
//         value={formData.email}
//         onChange={handleChange}
//         error={errors.email}
//       />

//       <InputField
//         name="password"
//         type="password"
//         placeholder="Your password"
//         value={formData.password}
//         onChange={handleChange}
//         error={errors.password}
//       />

//       <CheckboxField
//         name="terms"
//         checked={formData.terms}
//         onChange={handleChange}
//         error={errors.terms}
//       />

//       <motion.button
//         className="btn btn-secondary"
//         type="submit"
//         disabled={loading}
//         variants={formItemVariants}
//       >
//         {loading ? <div className="spinner" /> : <span>Sign In</span>}
//       </motion.button>

//       <motion.div className="auth-form__or" variants={formItemVariants}>
//         <span className="auth-form__or--text">or</span>
//       </motion.div>

//       <motion.button
//         className="auth-form__button btn btn-third"
//         type="button"
//         variants={formItemVariants}
//       >
//         <span>Login via Twitter</span>
//       </motion.button>

//       <motion.div className="auth-form__footer" variants={formItemVariants}>
//         <p className="auth-form__footer-text">Do you have an Account?</p>
//         <button className="auth-form__link link" type="button">
//           Sign In
//         </button>
//       </motion.div>
//     </motion.form>
//   );
// };

// export default SignInForm;
// components/SignInForm/SignInForm.tsx
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
