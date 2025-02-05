import { motion } from "motion/react";

/* eslint-disable react/prop-types */
export const Section = ({ title, children }) => {
  return (
    <motion.main className="section">
      <div className="container">
        <h2 className="title-1 title-color">{title}</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {children}
        </motion.div>
      </div>
    </motion.main>
  );
};
