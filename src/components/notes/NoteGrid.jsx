import React from 'react';
import NoteCard from './NoteCard';
import { Inbox } from 'lucide-react';

export default function NoteGrid({ notes, onDelete, onTogglePin, onDragStart, onDragOver, onDrop }) {
  if (notes.length === 0) {
    return (
      <div className="w-full mt-[50px] flex flex-col items-center opacity-50">
        <Inbox className="w-[50px] h-[50px] mb-[25px] text-slate-400" />
        <p className="text-[20px] text-slate-400 font-medium tracking-tight">Your wall is empty. Add a note above!</p>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onTogglePin={onTogglePin}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </div>
  );
}
