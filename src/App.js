import './App.css';
import Navbar from './components/navbar/Navbar';
import MainDisplay from './components/display/MainDisplay';
import ValueBlock from './components/ValueBlocks/ValueBlock';
import DownloadComponent from "./components/download/DownloadButton"
function App() {
  return (
    <div  className="App">

      <Navbar />

<DownloadComponent />

      <ValueBlock />
      <MainDisplay />      
    </div>
  );
}

export default App;
