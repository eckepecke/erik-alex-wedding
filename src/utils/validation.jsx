// ============================================
// src/utils/validation.js
// ============================================
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateRSVPForm = (formData) => {
  const errors = {};
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter your full name';
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.attending) {
    errors.attending = 'Please select whether you will attend';
  }
  
  if (formData.guests < 1 || formData.guests > 4) {
    errors.guests = 'Number of guests must be between 1 and 4';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};