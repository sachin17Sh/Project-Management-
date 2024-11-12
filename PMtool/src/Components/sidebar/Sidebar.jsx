
import Buttons from "../otherComponents/Buttons";

export default function Sidebar({ onAddProject, projects, onProjectSelect, selectedProjectID }) {
  return (
    <aside className="w-1/3 px-4 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 font-bold uppercase md:text-xl  text-slate-100">
        Your Projects
      </h2>
      <div>
        <Buttons onClick={onAddProject}>
          +Add Project</Buttons>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses="w-full text-left text-stone-300 my-1 px-2 py-2 rounded-sm hover:bg-stone-600 "
          if(project.id ===selectedProjectID){
            cssClasses   +=' bg-stone-800 text-stone-100"'
          } else{
              cssClasses+=" text-stone-100"
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={()=>onProjectSelect(project.id)}>
                {project.title}</button>

            </li>
          );
        })}

      </ul>
    </aside>
  );
}
