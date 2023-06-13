import { createContext, useState } from 'react';
import { object, string, number } from 'yup';

export const CheckoutContext = createContext();

const useCheckoutProvider = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    emNum: '',
    emPin: '',
    errors: {},
  });

  const userSchema = object().shape({
    name: string().max(255).required('The name field is required'),
    email: string().email('Invalid email format').max(255).required('The email field is required'),
    phone: number().typeError('Phone number must be a valid number').required('The phone number field is required'),
    address: string().max(255).required('The address field is required'),
    zip: string().max(10).required('The zip code field is required'),
    city: string().max(255).required('The city field is required'),
    country: string().max(255).required('The country field is required'),
    emNum: number().max(20).required('The e-money number field is required'),
    emPin: number().max(10).required('The e-money PIN field is required'),
  });

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      errors: {
        ...prevData.errors,
        [name]: undefined,
      },
    }));
  };

  const validateForm = () => {
    try {
      userSchema.validateSync(formData, { abortEarly: false });
      return true;
    }
    catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setFormData((prevData) => ({
        ...prevData,
        errors: newErrors,
      }));
      return false;
    }
  };

  const clearForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
      country: '',
      emNum: '',
      emPin: '',
      errors: {},
    });
  };

  return {
    formData,
    updateFormData,
    validateForm,
    clearForm,
  };
};

export default useCheckoutProvider;
