import React from 'react';
import logoImage from '../../assets/logo.jpg';

export default function Header() {
  return (
    <div className="w-full flex justify-center relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-[15px] z-20">
        <img src={logoImage} alt="ACM SIGKDD Logo" className="w-[50px] h-[50px] object-cover rounded-full shadow-sm border border-slate-200" />
        <span className="text-[20px] font-bold tracking-tight text-slate-800">ACM SIGKDD</span>
      </div>

      <div className="flex flex-col gap-[15px] items-center text-center">
        <div>
          <h1 className="text-[45px] font-bold text-slate-800 tracking-tight leading-none">Sticky Flow</h1>
          <p className="text-[15px] text-slate-500 mt-[5px] font-medium">Organize your ideas, fast.</p>
        </div>
      </div>
    </div>
  );
}
