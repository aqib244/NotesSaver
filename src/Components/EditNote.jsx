import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; 
import { updateNote } from "../redux/notesSlice";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { noteId } = useParams(); 
  const dispatch = useDispatch();
  
  
  const allNotes = useSelector((state) => state.notes.notes);

  useEffect(() => {
    
    if (noteId) {
      const note = allNotes.find((n) => n.id === noteId);
      
        setTitle(note.title);
        setContent(note.content);
    
    }
  }, [noteId]); 

  const handleUpdateNote = () => {
    const updatedNote = {
      id: noteId || Date.now().toString(),
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    dispatch(updateNote(updatedNote)); 
   
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-[80vh] min-w-[70vw]  my-4 gap-3">
        <input
          className="p-3 font-bold border bg-orange-300 border-black rounded-lg"
          type="text"
          placeholder="Title..."
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-3 border bg-orange-300 border-black resize-none rounded-lg"
          placeholder="Note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={25}
        ></textarea>
        <button className="bg-orange-300 border border-black py-3 rounded-lg font-bold" onClick={handleUpdateNote}>Update Note</button>
      </div>
    </div>
  );
};

export default EditNote;
