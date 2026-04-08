import React, { useState, useEffect, useMemo } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/layout/Header';
import NoteForm from './components/notes/NoteForm';
import NoteGrid from './components/notes/NoteGrid';

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("stickyNotes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = ({ text, color }) => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      color,
      createdAt: new Date().getTime(),
      pinned: false,
      rotate: Math.floor(Math.random() * 5) - 2
    };
    setNotes((prev) => [newNote, ...prev]);
  };

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter(n => n.id !== id));
  };

  const handleTogglePin = (id) => {
    setNotes((prev) =>
      prev.map(n => n.id === id ? { ...n, pinned: !n.pinned } : n)
    );
  };

  const [draggedNodeId, setDraggedNodeId] = useState(null);

  const handleDragStart = (e, id) => {
    setDraggedNodeId(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    if (draggedNodeId === null || draggedNodeId === targetId) return;

    setNotes((prev) => {
      const draggedNote = prev.find(n => n.id === draggedNodeId);
      const targetNote = prev.find(n => n.id === targetId);

      if (!draggedNote || !targetNote || draggedNote.pinned !== targetNote.pinned) return prev;

      const newNotes = [...prev];
      const draggedIndex = newNotes.findIndex(n => n.id === draggedNodeId);
      const targetIndex = newNotes.findIndex(n => n.id === targetId);

      const draggedNoteToMove = newNotes.splice(draggedIndex, 1)[0];
      newNotes.splice(targetIndex, 0, draggedNoteToMove);
      return newNotes;
    });
    setDraggedNodeId(null);
  };

  const sortedNotes = useMemo(() => {
    const pinned = notes.filter(n => n.pinned);
    const unpinned = notes.filter(n => !n.pinned);
    return [...pinned, ...unpinned];
  }, [notes]);

  return (
    <Layout>
      <div className="w-full pt-[20px] px-[40px] pb-[15px] border-b border-slate-400 shadow-sm mb-[10px] shrink-0 flex justify-center">
        <Header count={notes.length} />
      </div>
      <div className="flex w-full flex-1 overflow-hidden">
        <div className="w-[40%] shrink-0 h-full p-[40px] pt-[15px] flex flex-col items-center overflow-y-auto no-scrollbar z-10">
          <NoteForm onAdd={handleAddNote} currentCount={notes.length} />
        </div>

        <div className="w-[60%] h-full overflow-y-auto p-[40px] pt-[15px] pb-[80px] no-scrollbar">
          <NoteGrid 
            notes={sortedNotes}
            onDelete={handleDelete}
            onTogglePin={handleTogglePin}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </div>
      </div>
    </Layout>
  );
}
