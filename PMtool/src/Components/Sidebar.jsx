import React from "react";
import Buttons from "./Buttons";

export default function Sidebar({onAddProject}) {
  return (
    <aside className="w-1/3 px-4 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl  text-slate-100">
        Your Projects
      </h2>
      <div>
        <Buttons onClick={onAddProject}>
          +Add Project</Buttons>
      </div>
      <ul></ul>
    </aside>
  );
}
