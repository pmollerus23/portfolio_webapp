// PhoneInput.tsx
import React, { useState, useEffect } from "react";

interface PhoneInputProps {
  phone: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ phone, onChange }) => {
  const [localPhone, setLocalPhone] = useState<string>(phone);

  useEffect(() => {
    setLocalPhone(phone);
  }, [phone]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedPhone = formatPhoneNumber(value);
    setLocalPhone(formattedPhone);
    onChange(formattedPhone);
  };

  const formatPhoneNumber = (value: string): string => {
    const digits = value.replace(/\D/g, "");
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(
      6,
      10
    )}`;
  };

  return (
    <input
      type="tel"
      id="phone"
      value={localPhone}
      onChange={handleChange}
      placeholder="(123) 456-7890"
      className={`text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 `}     
    />

    
//       <input
//         type="tel"
//          id="phone"
//         placeholder="(123) 456-7890"
//         value={localPhone}
//  className={`text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 `}      />
   
  );
};

export default PhoneInput;
