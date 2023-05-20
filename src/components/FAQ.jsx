// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const questions = [
    {
        id: 1,
        question: "Are the toy cars safe for children?",
        answer:
            "Yes, our toy cars are designed with safety in mind. They are made from non-toxic materials and meet all safety regulations and standards.",
    },
    {
        id: 2,
        question: "Can these toy cars be used both indoors and outdoors?",
        answer:
            "Absolutely! Our toy cars are versatile and suitable for both indoor and outdoor play. Whether it's in the living room or the backyard, your child can have endless fun with them.",
    },
    {
        id: 3,
        question: "Are the toy cars suitable for a specific age group?",
        answer:
            "Our toy cars are designed to cater to a wide range of age groups. We have options available for toddlers, preschoolers, and older children. Please check the product descriptions for specific age recommendations.",
    },
    {
        id: 4,
        question: "How can I maintain and clean the toy cars?",
        answer:
            "To keep the toy cars in good condition, you can gently wipe them with a damp cloth to remove any dirt or stains. Avoid using harsh chemicals or submerging them in water.",
    },
];

const Accordion = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (id) => {
        if (id === activeQuestion) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(id);
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            {questions.map((q) => (
                <div
                    key={q.id}
                    className="border rounded-lg mb-4 p-4 cursor-pointer"
                    onClick={() => toggleQuestion(q.id)}
                >
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-semibold">{q.question}</p>
                        {activeQuestion === q.id ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                            </svg>

                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>

                        )}
                    </div>
                    {activeQuestion === q.id && <p className="mt-4">{q.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
