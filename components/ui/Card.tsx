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
      className={`bg-white rounded-lg shadow-md p-6 border border-gray-100 ${className}`}
    >
      {children}
    </article>
  );
}
