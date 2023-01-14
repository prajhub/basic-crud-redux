
import './App.css';
import { useSelector } from 'react-redux';



function App() {
  return (
    <div className="App">
        <div className='addUser'>

          <input type='text' placeholder='Name..'/>
          <input type='text' placeholder='Username..'></input>
          <button>Add User</button>
        </div>
        <div className='displayUsers'></div>
    </div>
  );
}

export default App;
