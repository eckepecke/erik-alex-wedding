// ============================================
// src/hooks/useRSVP.js
// ============================================
import { useState } from 'react';
import { validateRSVPForm } from '@utils/validation';

export const useRSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: 1,
    dietaryRestrictions: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async () => {
    const validation = validateRSVPForm(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('RSVP Submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setErrors({ submit: 'Failed to submit RSVP. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      attending: '',
      guests: 1,
      dietaryRestrictions: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    reset
  };
};