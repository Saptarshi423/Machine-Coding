import logo from './logo.svg';
import './App.css';

import hoc from './hoc';
import Outlet from './Outlet';

const WrappedComponent = hoc(Outlet);

function App() {
  return (
    <div className="App">
      <WrappedComponent isClick={false}/>
      <WrappedComponent isClick={true}/>
    </div>
  );
}

export default App;
