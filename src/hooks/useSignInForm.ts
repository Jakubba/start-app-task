import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../api/fakeApi';
import { useAuth } from './useAuth';
import { toast } from 'react-hot-toast';
import { validateForm } from '../components/SignInForm/validation';
import { FormErrors } from '../components/SignInForm/SignInForm.types';

export const useSignInForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<{ email: string; password: string; terms: boolean }>({
    email: '',
    password: '',
    terms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = ({
    target: { name, value, type, checked },
  }: ChangeEvent<HTMLInputElement>) =>
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData, setErrors)) {
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

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

  return { formData, errors, loading, handleChange, handleSubmit };
};
