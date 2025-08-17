"use client";

import { useState } from "react";

// utils
import { faqs } from "@/utils/constants";

// 3rd party
import { motion, AnimatePresence } from "framer-motion";
import { LiaPlusSolid, LiaMinusSolid } from "react-icons/lia";

function FAQItem({ faq, isOpen, onToggle, index }: FAQItemProps) {
  const direction = index % 2 === 0 ? -20 : 20;
  const delay = index * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex w-full items-center justify-between py-4 text-left">
        <button
          className="flex w-full items-center justify-between hover:underline"
          onClick={onToggle}
        >
          <h3 className="text-left font-semibold">{faq.question}</h3>
          <motion.span
            className="ml-6 flex-shrink-0"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <LiaMinusSolid className="h-5 w-5" />
            ) : (
              <LiaPlusSolid className="h-5 w-5" />
            )}
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-4 text-slate-500 dark:text-slate-400">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-xl md:text-2xl font-extrabold mb-8">
        <span className="inline-block border-b-2 border-primary text-primary origin-left">
          FAQ
        </span>
      </h2>

      <div className="divide-y divide-borderColor">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
