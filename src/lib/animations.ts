
import { gsap } from 'gsap';

// Simple fade in animation
export const fadeIn = (element: HTMLElement, delay = 0, duration = 0.5) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration, delay, ease: 'power2.out' }
  );
};

// Product card hover animation
export const productHover = (element: HTMLElement, isHovered: boolean) => {
  gsap.to(element, {
    y: isHovered ? -8 : 0,
    boxShadow: isHovered 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    duration: 0.3,
    ease: 'power2.out'
  });
};

// Button hover animation
export const buttonHover = (element: HTMLElement, isHovered: boolean) => {
  gsap.to(element, {
    y: isHovered ? -2 : 0,
    scale: isHovered ? 1.03 : 1,
    duration: 0.2,
    ease: 'power1.out'
  });
};

// Page transition animation
export const pageTransition = (container: HTMLElement) => {
  const tl = gsap.timeline();
  
  tl.fromTo(
    container.querySelectorAll('.animate-item'),
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.5, 
      stagger: 0.1, 
      ease: 'power2.out' 
    }
  );
  
  return tl;
};
