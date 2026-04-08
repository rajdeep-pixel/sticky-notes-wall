import React from 'react';
import { Pin, Trash2 } from 'lucide-react';
import { COLORS } from '../../utils/constants';
import { formatTime } from '../../utils/timeHelpers';

export default function NoteCard({ note, onDelete, onTogglePin, onDragStart, onDrop, onDragOver }) {
  const colorTheme = COLORS.find(c => c.id === note.color) || COLORS[0];

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, note.id)}
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, note.id)}
      className={`${colorTheme.bg} p-[25px] rounded-[25px] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-move h-[250px] relative group border border-black/5 hover:-translate-y-[5px]`}
      style={{ transform: `rotate(${note.rotate}deg)` }}
    >
      <div className="flex justify-between items-start mb-[20px] z-10 relative">
        <button
          onClick={() => onTogglePin(note.id)}
          className="p-[5px] rounded-full hover:bg-black/10 transition-colors opacity-70 hover:opacity-100"
          title={note.pinned ? "Unpin" : "Pin to top"}
        >
          <Pin className={`w-[20px] h-[20px] ${note.pinned ? 'fill-slate-800 text-slate-800' : 'text-slate-600'}`} />
        </button>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onDelete(note.id)}
            className="p-[5px] rounded-full hover:bg-black/10 transition-colors text-slate-600 hover:text-rose-600"
            title="Delete note"
          >
            <Trash2 className="w-[20px] h-[20px]" />
          </button>
        </div>
      </div>

      <div className={`flex-1 overflow-auto text-[18px] font-semibold font-handwriting ${colorTheme.text} whitespace-pre-wrap leading-relaxed z-10 relative pr-[5px]`}>
        {note.text}
      </div>

      <div className="mt-[20px] text-[10px] uppercase font-bold tracking-wider text-black/30 z-10 relative">
        {formatTime(note.createdAt)}
      </div>

      <div className="absolute top-0 right-0 w-full h-[50px] bg-gradient-to-b from-white/30 to-transparent rounded-t-[25px] pointer-events-none"></div>
    </div>
  );
}
