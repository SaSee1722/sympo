import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  className = '',
  style = {}
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
