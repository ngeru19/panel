import './App.css';
import Panel from '../Panel/Panel';
import EditPanel from '../EditPanel/EditPanel'; 

function App() {
  return (
    <div className="App">
      <h2 className="app__header">Мои организации</h2>
      <Panel />
      <EditPanel />
    </div>
  );
}

export default App;
