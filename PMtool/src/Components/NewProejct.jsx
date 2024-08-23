import React from "react";
import Input from "./Input";
import { useRef } from "react";

export default function NewProject({onAdd}) {
  const title = useRef()
  const description = useRef()
  const dueDate= useRef()

  function handleSave(){
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value
  
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }
  
  return (
    <div className="w-[40rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="hover:bg-stone-200 text-stone-800 font-bold py-2 px-6 rounded">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-950 hover:bg-stone-700 text-stone-50 font-bold py-2 px-6 rounded"
          onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <p>
          <Input ref={title} label="Title" />
          <Input ref={description}label="Description" textarea />
          <Input ref={dueDate} label="Due Date" />
        </p>
      </div>
    </div>
  );
}
