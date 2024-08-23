// import NewProejct from "./Components/NewProejct";
import Sidebar from "./Components/Sidebar";
import SelectProject from "./Components/SelectProject";
import { useState } from "react";
import NewProject from "./Components/NewProejct";

function App() {
  const [selectProject, setSelectProject] = useState({
    selectedProjectID: undefined, // initially no project selected
    project: [],
  });
  function handleAddproject() {
    setSelectProject((prevState) => {
      return {
        ...prevState, // we don't lose old state
        selectedProjectID: null, // selecting project by ID
      };
    });
  }
  function handleNewProject(projectData) {
    setSelectProject(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        project: [...prevState.project, newProject],
      };
    });
  }
  console.log(selectProject);
  
  let content;

  if (selectProject.selectedProjectID === null) {
    content = <NewProject onAdd={handleNewProject} />;
  } else if (selectProject.selectedProjectID === undefined) {
    content = <SelectProject onAddProject={handleAddproject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-9">
      <Sidebar onAddProject={handleAddproject} />
      {content}
    </main>
  );
}

export default App;
