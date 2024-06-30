import './App.css';
import Body from './component/Body';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App no-scrollbar">
      <Body/>
      <Toaster />
    </div>
  );
}

export default App;
