import './App.css';
// import Padre from './components/container/padre';
import TaskListComponent from './components/container/taskListComponent';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**<TaskListComponent></TaskListComponent>*/}
        {/* <Padre></Padre> */}
        <RegisterFormik></RegisterFormik>

      </header>
    </div>
  );
}

export default App;
