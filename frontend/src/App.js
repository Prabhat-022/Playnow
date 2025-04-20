import './App.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Browse from './component/Browse';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Profile from './pages/Profile';

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <Provider store={store}>
      <div className="App no-scrollbar">
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={!user ? <Login /> : <Navigate to="/browse" />} />
            <Route path="/register" element={!user ? <Register /> : <Navigate to="/browse" />} />
            <Route path="/browse" element={user ? <Browse /> : <Navigate to="/" />} />
            <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />

          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
