// Centralized motion tokens — "weight" physics: heavy settle, no bounce.

export const easeIron = [0.16, 1, 0.3, 1];
export const easePower = [0.22, 1, 0.36, 1];

export const fadeRise = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easePower },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeIron } },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easePower },
  },
};

export const viewportOnce = { once: true, amount: 0.2 };
