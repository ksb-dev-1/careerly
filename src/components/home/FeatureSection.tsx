"use client";

// utils
import { features } from "@/utils/constants";

// 3rd party
import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <div className="max-w-5xl w-full mx-auto px-6">
      <h2 className="text-xl md:text-2xl font-extrabold mb-8">
        <span className="inline-block border-b-2 border-primary text-primary origin-left">
          Features
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {features.map((feature, index) => (
          <motion.article
            key={index}
            className="p-4 sm:p-6 border rounded bg-light dark:bg-dark"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-10 w-10 rounded border mb-4">
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
                aria-hidden="true"
              >
                {feature.icon}
              </span>
            </div>
            <h1 className="font-bold text-lg sm:text-xl mb-2">
              {feature.title}
            </h1>
            <p className="text-text_secondary">{feature.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
