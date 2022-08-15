import './App.css';
// import Padre from './components/container/padre';
import TaskListComponent from './components/container/taskListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskListComponent></TaskListComponent>
        {/* <Padre></Padre> */}
      </header>
    </div>
  );
}

export default App;
