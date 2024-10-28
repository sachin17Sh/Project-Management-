// import NewProejct from "./Components/NewProejct";
import Sidebar from "./Components/Sidebar";
import SelectProject from "./Components/SelectProject";
import { useState } from "react";
import NewProject from "./Components/NewProejct";
import ProjectSelected from "./Components/ProjectSelected";

function App() {
  const [selectProject, setSelectProject] = useState({
    selectedProjectID: undefined, // initially no project selected
    project: [],
  });
  function handleCancelproject() {
    setSelectProject((prevState) => {
      return {
        ...prevState, // we don't lose old state
        selectedProjectID: null, // selecting project by ID
      };
    });
  }

  function handleProjectSelected(id){
    setSelectProject((prevState) => {
      return {
        ...prevState, // we don't lose old state
        selectedProjectID: id, // selecting project by ID
      };
    });

  }
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
      const projectID = Math.random()
      const newProject = {
        ...projectData,
        id: projectID,
      };
      return {
        ...prevState,
        selectedProjectID: undefined,
        project: [...prevState.project, newProject],
      };
    });
  }

  function handleDelete(){
    setSelectProject((prevState) => {
      return {
        ...prevState, // we don't lose old state
        selectedProjectID: undefined, // selecting project by ID
        project: prevState.project.filter(
          (project) => project.id !== prevState.selectedProjectID)
      };
    });
  }
  const selectProjectDetail= selectProject.project.find(project=>project.id===selectProject.selectedProjectID)
  let content= <ProjectSelected project={selectProjectDetail} onDelete={handleDelete}/>;

  if (selectProject.selectedProjectID === null) {
    content = <NewProject onAdd={handleNewProject} onCancel={handleCancelproject} />;
  } else if (selectProject.selectedProjectID === undefined) {
    content = <SelectProject onAddProject={handleAddproject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-9">
      <Sidebar onAddProject={handleAddproject} projects={selectProject.project} onProjectSelect={handleProjectSelected}/>
      {content}
    </main>
  );
}

export default App;
