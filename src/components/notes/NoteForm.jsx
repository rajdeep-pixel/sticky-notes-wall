import React, { useState } from 'react';
import { COLORS, MAX_NOTES } from '../../utils/constants';

export default function NoteForm({ onAdd, currentCount }) {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[0].id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    if (currentCount >= MAX_NOTES) return;

    onAdd({ text: text.trim(), color: selectedColor });
    setText("");
  };

  const isLimitReached = currentCount >= MAX_NOTES;
  const activeTheme = COLORS.find(c => c.id === selectedColor) || COLORS[0];

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex justify-between items-center mb-[20px]">
        <h2 className="text-[20px] font-semibold text-slate-800 tracking-tight">Add Sticky Note</h2>
        <div className="text-[15px] font-semibold text-slate-700 bg-white px-[20px] py-[5px] rounded-[15px] shadow-sm border border-slate-200">
          {currentCount}/{MAX_NOTES} Notes
        </div>
      </div>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full h-[250px] p-[25px] bg-white text-slate-700 rounded-[25px] resize-none mb-[25px] text-[18px] font-semibold font-handwriting outline-none shadow-sm focus:shadow-md transition-all duration-300 border border-slate-200 leading-relaxed"
        maxLength={300}
        disabled={isLimitReached}
      ></textarea>

      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[15px]">
          {COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedColor(c.id)}
              className={`w-[30px] h-[30px] rounded-full transition-all duration-200 border-2 ${c.bg} ${selectedColor === c.id ? 'border-slate-800 scale-110' : 'border-black/10 hover:border-black/20 hover:scale-110'}`}
              title={`Select Color`}
              disabled={isLimitReached}
            />
          ))}
        </div>
        <button
          type="submit"
          disabled={isLimitReached || text.trim() === ""}
          className="w-full bg-slate-700 text-white px-[25px] py-[15px] rounded-[10px] font-medium transition-all hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          Add Note
        </button>
      </div>
      
      {isLimitReached && <p className="text-rose-500 mt-[20px] text-[15px] font-medium">Maximum limit of 20 notes reached.</p>}
    </form>
  );
}
