import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from './../../api/fakeApi';
import { useAuth } from './../../hooks/useAuth';
import { toast } from 'react-hot-toast';
import { FormData, FormErrors } from './SignInForm.types';

import './SignInForm.styles.scss';

export const SignInForm: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateEmailFormat = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.(com|pl|org|net|edu|gov)$/i;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let newErrors: typeof errors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required.';
      toast.error('Email is required.');
    } else if (!validateEmailFormat(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
      toast.error('Enter a valid email address.');
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
      toast.error('Password is required.');
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters long.';
      toast.error('Password must be at least 6 characters long.');
    }

    if (!formData.terms) {
      newErrors.terms = 'You must agree to the Terms of Service.';
      toast.error('You must agree to the Terms of Service.');
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await signIn({ email: formData.email, password: formData.password });
      toast.success(res.message);
      login();
      navigate('/pricing');
    } catch (err: any) {
      const errorMsg = err.message || 'Something went wrong.';
      setErrors({ email: errorMsg });
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="hero__form" onSubmit={handleSubmit}>
      <h2 className="hero__form-title">Sign Up Now</h2>

      <div className={`hero__field ${errors.email ? 'hero__field--error' : ''}`}>
        <input
          className="hero__input"
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="hero__error">{errors.email}</span>}
      </div>

      <div className={`hero__field ${errors.email ? 'hero__field--error' : ''}`}>
        <input
          className="hero__input"
          type="password"
          name="password"
          placeholder="Your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="hero__error">{errors.password}</span>}
      </div>

      <div
        className={`hero__field hero__field--checkbox ${errors.terms ? 'hero__field--error' : ''}`}
      >
        <input
          className="hero__checkbox"
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <label className="hero__label" htmlFor="terms">
          I agree to the Terms of Service.
        </label>
        {errors.terms && <span className="hero__error">{errors.terms}</span>}
      </div>

      <button className="btn btn-secondary" type="submit" disabled={loading}>
        {loading ? <div className="spinner" /> : <span>Sign In</span>}
      </button>
      <div className="hero__or">
        <span className="hero__or--text">or</span>
      </div>

      <button className="hero__button btn btn-third" type="button">
        <span>Login via Twitter</span>
      </button>

      <div className="hero__footer">
        <p className="hero__footer-text">Do you have an Account?</p>
        <button className="hero__link link" type="button">
          <span>Sign In</span>
        </button>
      </div>
    </form>
  );
};
