import React from 'react';

export default function IconButton({ 
  icon: Icon, 
  onClick, 
  title, 
  className = "", 
  disabled = false,
  active = false
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-[5px] rounded-full transition-colors flex items-center justify-center 
        ${active ? 'bg-black/10 text-slate-800' : 'text-slate-600 hover:bg-black/10 hover:text-slate-800'}
        ${disabled ? 'opacity-50 cursor-not-allowed hover:bg-transparent' : ''}
        ${className}`}
    >
      <Icon className="w-[20px] h-[20px]" />
    </button>
  );
}
