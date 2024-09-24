'use client';
import React, { useState } from 'react';
import { LargeButton } from './Button';

const successMsg = "Thanks for reaching out, I'll get back to you ASAP!";

type FormField = 'name' | 'email' | 'company' | 'service' | 'message';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleInputChange =
        (field: FormField, required: boolean) =>
        (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const value = event.target.value;
            setFormData({
                ...formData,
                [field]: value
            });

            // Clear error message on input change
            setErrors({
                ...errors,
                [field]: ''
            });
        };

    const handleBlur =
        (field: FormField, required: boolean) =>
        (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const value = event.target.value;

            if (field === 'email') {
                const isValid = emailRegex.test(value);
                setErrors({
                    ...errors,
                    email: isValid ? '' : 'Please enter a valid email address'
                });
            } else if (required) {
                setErrors({
                    ...errors,
                    [field]: value ? '' : `Please enter a valid ${field}`
                });
            }
        };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const hasErrors = validateForm();
        if (hasErrors) {
            setSubmitStatus('Please fill in all required fields');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus(successMsg);
            } else {
                setSubmitStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('Failed to send email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitClick = () => {
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form.dispatchEvent(
            new Event('submit', { cancelable: true, bubbles: true })
        );
    };

    const validateForm = () => {
        let hasErrors = false;
        const newErrors: Partial<Record<FormField, string>> = {};

        if (!formData.name) {
            newErrors.name = 'Please enter a valid name';
            hasErrors = true;
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            hasErrors = true;
        }
        if (!formData.message) {
            newErrors.message = 'Please enter a valid message';
            hasErrors = true;
        }

        setErrors(newErrors);
        return hasErrors;
    };

    const getLabelClass = (fieldName: FormField) => {
        return formData[fieldName] ? 'text-stone-100/50' : 'text-stone-100';
    };

    const fields = [
        {
            id: 'form-name',
            name: 'name',
            placeholder: '',
            label: "What's your name? *",
            type: 'text',
            component: 'input',
            required: true
        },
        {
            id: 'form-email',
            name: 'email',
            placeholder: '',
            label: "What's your email? *",
            type: 'email',
            component: 'input',
            required: true
        },
        {
            id: 'form-company',
            name: 'company',
            placeholder: '',
            label: "What's the name of your organisation?",
            type: 'text',
            component: 'input',
            required: false
        },
        {
            id: 'form-service',
            name: 'service',
            placeholder: '',
            label: 'What services are you looking for?',
            type: 'text',
            component: 'input',
            required: false
        },
        {
            id: 'form-message',
            name: 'message',
            placeholder: "",
            label: 'Your Message *',
            component: 'textarea',
            rows: 6,
            required: true
        }
    ];

    return (
        <form
            id="contact-form"
            className="w-full  md:px-0  md:text-xl font-light"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
        >
            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className={`flex flex-col w-full ${
                        field.component === 'textarea' ? 'border-y' : 'border-t'
                    } border-stone-100/30 py-8 `}
                >
                    <label
                        htmlFor={field.id}
                        className={`flex flex-row items-center gap-3 md:gap-6 mb-0 w-full  transition-all duration-200 ease-in-out ${getLabelClass(
                            field.name as FormField
                        )}`}
                    >
                        <h5 className="w-8 h-6 md:w-10 md:h-8 flex items-center justify-center text-xs md:text-sm uppercase tracking-wider  border border-stone-100/50 rounded-3xl">{`0${
                            index + 1
                        }`}</h5>
                        {field.label}
                    </label>
                    {field.component === 'input' ? (
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="w-full pt-4 pl-11 md:pl-16 text-sm md:text-lg bg-transparent border-0 placeholder-stone-100/50 focus:outline-none"
                            required={field.required}
                            onChange={handleInputChange(
                                field.name as FormField,
                                field.required
                            )}
                            onBlur={handleBlur(
                                field.name as FormField,
                                field.required
                            )}
                        />
                    ) : (
                        <textarea
                            id={field.id}
                            name={field.name}
                            rows={field.rows}
                            placeholder={field.placeholder}
                            className="w-full pt-4 pl-11 md:pl-16  text-sm md:text-lg bg-transparent border-0 resize-none placeholder-stone-100/50 focus:outline-none"
                            required={field.required}
                            onChange={handleInputChange(
                                field.name as FormField,
                                field.required
                            )}
                            onBlur={handleBlur(
                                field.name as FormField,
                                field.required
                            )}
                        ></textarea>
                    )}
                    {errors[field.name as FormField] && (
                        <span className="text-red-500 text-xs md:text-sm pl-11 md:pl-16 mt-2 pt-4">
                            {errors[field.name as FormField]}
                        </span>
                    )}
                </div>
            ))}

            {submitStatus != successMsg && !loading && (
                <div className="flex flex-col mt-10 w-full">
                    <div className="flex flex-row w-full justify-between">
                        <LargeButton
                            text="Send Message"
                            onClick={handleSubmitClick}
                        />
                        <p className="text-sm text-stone-400">
                            * Mandatory field
                        </p>
                    </div>

                    {submitStatus && !loading && (
                        <p className="text-xs md:text-base text-red-500 mt-4">
                            {submitStatus}
                        </p>
                    )}
                </div>
            )}

            {submitStatus != successMsg && loading && (
                <div role="status" className="mt-4">
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-600 animate-spin  fill-stone-100"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            )}

            {submitStatus === successMsg && (
                <p className="text-sm md:text-base text-stone-400 mt-4">
                    {submitStatus}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
