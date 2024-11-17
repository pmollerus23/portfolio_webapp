import React, { useState, ChangeEvent, FormEvent } from "react";
import PhoneInput from "./PhoneInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface SubmitStatus {
  success: boolean;
  error: string | null;
}

// const ContactCard: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

const ContactCard: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    success: false,
    error: null,
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone validation (optional)
    if (formData.phone) {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Invalid phone format (10 digits required)";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   const formattedPhone = formatPhoneNumber(value);
  //   setFormData((prev) => ({
  //     ...prev,
  //     ["phone"]: value,
  //   }))
  //   onChange(formattedPhone); // Pass the formatted phone to the parent
  // };

  // const formatPhoneNumber = (value: string) => {
  //   const digits = value.replace(/\D/g, '');

  //   // Format based on the number of digits
  //   if (digits.length < 4) return digits;
  //   if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  //   return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;

  // };

  const handlePhoneChange = (phone: string) =>
  {
    setFormData({...formData, phone});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setSubmitStatus({ success: false, error: null });

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const requestBody = {
        From: formData.email,
        // Phone: formData.phone  // Assuming you're using the email field for the recipient
        Subject: "Inquiry Message", // You can customize this
        Body: `
        <html>
                        <body>
                            <h1>Contact Form Submission</h1>
                            <p><strong>Name:</strong> ${formData.name}</p>
                            <p><strong>Email:</strong> ${formData.email}</p>
                            <p><strong>Phone:</strong> ${formData.phone}</p>
                            <p><strong>Message:</strong><br>${formData.message.replace(
                              /\n/g,
                              "<br/>"
                            )}</p>
                        </body>
                    </html>
        `,
      };
      // Simulate API call
      // await new Promise(resolve => setTimeout(resolve, 1500));

      const response = await fetch("https://flipyourcode.com/api/emails/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // Add your actual email submission logic here
      console.log("Form submitted:", formData);

      setSubmitStatus({ success: true, error: null });
      setFormData({ name: "", email: "", phone: "", message: "" });

      toast.success("Email sent successfully!",{
        position: "top-center"
      });

    } catch (error) {
      setSubmitStatus({
        success: false,
        error: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="inline-flex flex-col w-full max-w-lg h-[580px] overflow-auto bg-slate-200 rounded-lg p-4 shadow-lg">
      <h2 className="text-2xl font-bold text-black mb-4">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 
              ${errors.name ? "border-red-500" : "border-gray-300"}`}
            placeholder="Your Name"
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
            placeholder="your@email.com"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone (optional)
          </label>
          {/* <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 
              ${errors.phone ? "border-red-500" : "border-gray-300"}`}
            placeholder="(123) 456-7890"
            disabled={isLoading}
          /> */}
           <PhoneInput phone={formData.phone} onChange={handlePhoneChange} />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message*
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`text-black w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 h-32 
              ${errors.message ? "border-red-500" : "border-gray-300"}`}
            placeholder="Your message here..."
            disabled={isLoading}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {submitStatus.success && (
          <p className="text-green-500 text-sm">Message sent successfully!</p>
        )}

        {submitStatus.error && (
          <p className="text-red-500 text-sm">{submitStatus.error}</p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`${
            isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
          } text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex justify-center items-center`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Me an Email"
          )}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactCard;
