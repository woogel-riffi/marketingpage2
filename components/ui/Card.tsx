import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Card({ children, className = '', id }: CardProps) {
  return (
    <article
      id={id}
      className={`bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary-green hover:border-primary-gold transition-all transform hover:scale-105 ${className}`}
    >
      {children}
    </article>
  );
}
