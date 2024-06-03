import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <Link href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>×</Link>
      <Link to="/">Home</Link>
      <Link to="#">TV show</Link>
      <Link to="#">Movie</Link>
      <Link to="#">Popular</Link>
      <Link to="#">My List</Link>
    </div>
  );
};

export default Sidebar;
