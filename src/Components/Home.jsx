import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addNote } from "../redux/notesSlice";
import { useForm } from "react-hook-form";
import "./Home.css";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const noteId = params.get("noteId");
  const createNote = () => {
    const note = {
      id: noteId || Date.now().toString(),
      title: title,
      content: content,
      createdAt: new Date().toISOString(),
    };

    dispatch(addNote(note));

    setTitle("");
    setContent("");
    setParams({});
  };
  return (
    <div className="flex justify-center">
      <div>
        <form
          onSubmit={handleSubmit(createNote)}
          className="flex add-note flex-col   my-4 gap-3"
          action=""
        >
          <input
            className=" font-bold border  border-black bg-orange-300 p-3 rounded-lg"
            type="text"
            {...register("title", {
              required: { value: true, message: "This field is required" },
              minLength: {
                value: 3,
                message: "Should not be less than 3 Chars",
              },
            })}
            placeholder="Title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {errors.title && (
            <li className="error-msg">
              <small>{errors.title.message}</small>
            </li>
          )}
          <textarea
            className="p-3 border border-black bg-orange-300 resize-none rounded-lg"
            placeholder="Note..."
            {...register("note", {
              required: { value: true, message: "This field is required" },
              minLength: {
                value: 3,
                message: "Should not be less than 3 Chars",
              },
            })}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            rows={25}
          ></textarea>
          {errors.note && (
            <li className="error-msg">
              <small>{errors.note.message}</small>
            </li>
          )}
          <button
            className="font-bold bg-orange-300 border border-black py-3 rounded-lg"
            type="submit"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
