import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []  
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes)); // Save to localStorage
      toast.success("Note Added Successfully");
    },
    updateNote: (state, action) => {
      const note = action.payload;
      const i = state.notes.findIndex((item) => item.id === note.id);
      if (i >= 0) {
        state.notes[i] = note;
        localStorage.setItem("notes", JSON.stringify(state.notes)); // Save to localStorage
      }
      toast.success("Updated Successfully");
    },
    deleteNote: (state, action) => {
      const noteId = action.payload;
      const i = state.notes.findIndex((item) => item.id === noteId);
      if (i >= 0) {
        state.notes.splice(i, 1);
        localStorage.setItem("notes", JSON.stringify(state.notes)); // Save to localStorage
        toast.success("Note Deleted Successfully");
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { addNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
