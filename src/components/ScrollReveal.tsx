import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
}

export const ScrollReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransformStyle = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    
    switch (direction) {
      case 'up': return 'translate3d(0, 60px, 0)';
      case 'down': return 'translate3d(0, -60px, 0)';
      case 'left': return 'translate3d(60px, 0, 0)';
      case 'right': return 'translate3d(-60px, 0, 0)';
      case 'scale': return 'scale(0.9)';
      default: return 'translate3d(0, 60px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};

export const StaggerContainer = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
