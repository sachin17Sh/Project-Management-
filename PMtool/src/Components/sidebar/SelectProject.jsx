
import img from "../../assets/no-projects.png";
import Buttons from "../otherComponents/Buttons";
export default function SelectProject({onAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={img} alt="No Project list" className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-xl text-stone-700 font-bold my-4">No Project Selected </h2>
      <p className="text-stone-800 mb-4">Select a Project or get started with New one </p>
      <p className="mt-8">
        <Buttons onClick={onAddProject}>Create New Project</Buttons>
      </p>
    </div>
  );
}
