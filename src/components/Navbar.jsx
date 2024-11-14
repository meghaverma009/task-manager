import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <div className="logo">
          <Link to="/" className="logoLink">Task Manager</Link>
        </div>
        <ul className="navLinks">
          <li><Link to="/" className="navLink">Tasks</Link></li>
          <li><Link to="/completed" className="navLink">Completed Tasks</Link></li>
          <li><Link to="/add" className="navLink addTaskLink">Add Task</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
