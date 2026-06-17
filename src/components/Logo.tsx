import React from 'react';

interface LogoProps {
  className?: string;
  id?: string;
}

export default function Logo({ className = "w-[150px] sm:w-[180px] h-auto", id = "logo-image" }: LogoProps) {
  return (
    <img
      src="https://raw.githubusercontent.com/BusinessBs-Interiors/Web-Assets/main/Logo.jpeg"
      alt="2B's Interior Construction Logo"
      className={`object-contain flex-shrink-0 ${className}`}
      referrerPolicy="no-referrer"
      id={id}
    />
  );
}
