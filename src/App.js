import './App.css';
import MainDash from './components/sidebar/MainDash/MainDash';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <SideBar />
        <MainDash />
      </div>
    </div>
  );
}

export default App;
