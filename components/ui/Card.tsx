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
      className={`bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#2D5016] hover:border-[#1a3a0d] transition-all transform hover:scale-105 ${className}`}
    >
      {children}
    </article>
  );
}
