import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import "./ViewNote.css"

const ViewNote = () => {
  const {id} = useParams();

  const notes  = useSelector((state)=> state.notes.notes)
  
  const note = notes.filter((n)=> n.id === id)[0]
  console.log(note);

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col view-note my-4 gap-3">
      
        <input
          className="border  bg-orange-300 border-black  p-3 rounded-lg"
          type="text"
          placeholder="Title..."
          value={note.title}
          disabled
          
        />

      
       

     
        <textarea
          className="p-3 border h-[70vh] bg-orange-300 border-black view-note resize-none rounded-lg"
          placeholder="Note..."
          value={note.content}
          disabled
          rows={25}
        ></textarea>
        
       
      </div>
    </div>
  )
}

export default ViewNote
