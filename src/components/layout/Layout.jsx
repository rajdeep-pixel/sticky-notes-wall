import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="bg-[#faf8f5] h-screen w-screen overflow-hidden text-slate-800 font-sans flex flex-col">
      {children}
    </div>
  );
}
