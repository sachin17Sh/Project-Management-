// import NewProejct from "./Components/NewProejct";
import Sidebar from "./Components/sidebar/Sidebar";
import SelectProject from "./Components/sidebar/SelectProject";
import { useState } from "react";
import NewProject from "./Components/mainscreenContent/NewProejct";
import ProjectSelected from "./Components/sidebar/ProjectSelected";

function App() {
  const [selectProject, setSelectProject] = useState({
    selectedProjectID: undefined, // initially no project selected
    project: [],
    tasks: []
  });

  function handleAddTask(text) {
    setSelectProject(prevState => {
      const taskID = Math.random()
      const newTask = {
        text: text,
        projectID:prevState.selectedProjectID,
        id: taskID,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });

  }
  function handleDeleteTask(id) {
    setSelectProject((prevState) => {
      return {
        ...prevState, // we don't lose old state
        tasks: prevState.tasks.filter((task) => task.id !== id)  
      };
    });
  }
  function handleCancelproject() {
    setSelectProject((prevState) => {
      return {
        ...prevState, // we don't lose old state
        selectedProjectID: null, // selecting project by ID
      };
    });
  }

  function handleProjectSelected(id) {
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

  function handleDelete() {
    setSelectProject((prevState) => {
      return {
        ...prevState, // we don't lose old state
        selectedProjectID: undefined, // selecting project by ID
        project: prevState.project.filter(
          (project) => project.id !== prevState.selectedProjectID)  
      };
    });
  }
  const selectProjectDetail = selectProject.project.find(project => project.id === selectProject.selectedProjectID)
  let content = <ProjectSelected project={selectProjectDetail} onDelete={handleDelete} onAddtask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={selectProject.tasks}  />;

  if (selectProject.selectedProjectID === null) {
    content = <NewProject onAdd={handleNewProject} onCancel={handleCancelproject} />;
  } else if (selectProject.selectedProjectID === undefined) {
    content = <SelectProject onAddProject={handleAddproject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-9">
      <Sidebar onAddProject={handleAddproject} projects={selectProject.project} onProjectSelect={handleProjectSelected} selectedProjectID={selectProject.selectedProjectID} />
      {content}
    </main>
  );
}

export default App;
