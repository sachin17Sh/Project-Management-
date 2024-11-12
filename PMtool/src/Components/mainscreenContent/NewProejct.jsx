
import Input from "../otherComponents/Input";
import { useRef } from "react";
import Modal from "../otherComponents/Modal";

export default function NewProject({ onAdd, onCancel}) {
  const modal = useRef()
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value


    if (enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === '') {
      modal.current.open()
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl text-stone-700 font-bold my-4">Invalid Input</h2>
        <p className="text-stone-800 mb-4" >Oops... please enter valid inputs</p>
      </Modal>
      <div className="w-[40rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="hover:bg-stone-300 text-stone-800 font-bold py-2 px-6 rounded" onClick={onCancel}>
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
            <Input type="text" ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
          </p>
        </div>
      </div>
    </>
  );
}
